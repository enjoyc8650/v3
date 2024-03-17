import { ref } from "vue"

export default function useTitle(val) {
  const title = ref(val)
  document.title = title.value
}