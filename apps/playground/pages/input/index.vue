<template>
  <div class="w-full flex flex-col space-y-10 mt-10">
    <k-text-input modelValue="No labels" />
    <k-text-input
      label="Company Name"
      modelValue="Salfati Group"
      helpText="This is a help text"
      cornerHint="Corner"
    />
    <k-text-input
      label="Forever invalid"
      modelValue="Invalid"
      helpText="This is a help text"
      errorText="This is error text"
    />

    <k-text-input label="Disabled input" modelValue="Disabled" disabled />

    <k-text-input label="With icons" modelValue="Lots of icons">
      <template #leadingIcon>
        <KIconEmail class="h-5 w-5 text-brand-gray-400" aria-hidden="true" />
      </template>
      <template #trailingIcon>
        <KIconQuestion class="h-5 w-5 text-brand-gray-400" aria-hidden="true" />
      </template>
    </k-text-input>

    <k-text-input
      insetLabel
      label="With inset label"
      placeholder="Placeholder"
    />

    <k-text-input label="Pill" placeholder="Placeholder" pill />
  </div>
</template>
