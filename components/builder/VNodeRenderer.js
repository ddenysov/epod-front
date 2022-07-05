export default {
  functional: true,
  render: (h, { props }) => {
    return props.nodes || h(null)
  },
}
