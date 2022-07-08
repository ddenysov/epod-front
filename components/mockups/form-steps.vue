<template>
  <multi-step-form
    @submit=""

  >
    <step name="first-step">
      <form-item name="firstName" />
      <form-item name="lastName" />
    </step>
    <step name="second-step">
      <second-step />
    </step>
    <step name="third-step">

    </step>
  </multi-step-form>
</template>

<script>
export default {
  name: 'form-steps'
}
</script>
