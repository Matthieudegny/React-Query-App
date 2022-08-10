import { useEffect } from "react"

export default function useIntersectionObserver({
  target,
  onIntersect,
  //enabled -> false by default then getNextPage = true, and false at > 6
  enabled = false,
}) {

  console.log(target)

  const options = {
    threshold : 0.9,
    rootMargin : "50px",
    root: null
  }

  useEffect(() => {
    if (!enabled) {
      return
    }
    //creation of the observer
    const observer = new IntersectionObserver(
      entries =>
        //if entrey.isIntersectiong is true (is set automaticly true with IntersectionObserver) so do onIntersect (=fetchNextPage)
        entries.forEach(entry => entry.isIntersecting && onIntersect()),options
    )

    //remember disabled={!hasNextPage || isFetchingNextPage} for button
    //the target.current could only be read when the enabled value change (useEffect) because at the mount of the component the value is
    //undefined and make bug the observer,  so i need to read the value only when enabled is true and i am sure loadMoreButtonRef is true
    const el = target && target.current

    if (!el) {
      return
    }
    //exploitation of the observer
    observer.observe(el)

    //cleaning
    return () => {
      observer.unobserve(el)
    }
  }, [enabled])
}