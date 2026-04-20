import '../theme/styles/index.css'
import { useNav } from '@slidev/client/composables/useNav.ts'
import { defineAppSetup } from '@slidev/types'
import { nextTick } from 'vue'

/**
 * When the slide *number* changes, jump this slide’s click counter to the end so
 * every `v-click` block is visible at once. We never call `nav.next()` here — that
 * was advancing past the last click and triggering `nextSlide()`.
 */
export default defineAppSetup(({ router }) => {
  let runId = 0

  router.afterEach(async (to, from) => {
    const toNo = Number(to.params.no) || 1
    const fromNo = from ? Number(from.params.no) || 0 : 0
    // Only when the slide number changes — not when only `?clicks=` updates
    if (from && toNo === fromNo)
      return

    const myRun = ++runId
    await nextTick()
    await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())))

    const name = String(to.name ?? '')
    if (['export', 'overview', 'notes', 'notes-edit', 'entry', 'print'].includes(name))
      return

    const q = to.query || {}
    if (q.print != null && q.print !== 'false')
      return

    let nav: ReturnType<typeof useNav>
    try {
      nav = useNav()
    }
    catch {
      return
    }

    // Wait until v-click directives have registered (total was 0 on first paint)
    let total = 0
    for (let i = 0; i < 50; i++) {
      if (myRun !== runId)
        return
      await nextTick()
      total = nav.clicksTotal.value
      if (total > 0)
        break
      await new Promise((r) => setTimeout(r, 30))
    }

    if (myRun !== runId || total <= 0)
      return

    // One jump to “all steps visible” for this slide. `go` clamps to the real total.
    await nav.go(toNo, total, true)
  })
})
