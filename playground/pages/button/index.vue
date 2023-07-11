<template>
  <a href="/"> back</a>
  <div class="w-full flex items-center flex-col space-y-2 mt-10">
    <k-button variant="primary">Primary</k-button>
    <k-button variant="secondary">Seondary</k-button>
    <k-button variant="info">Info</k-button>
    <k-button variant="success">Success</k-button>
    <k-button variant="warn">Warn</k-button>
    <k-button variant="danger">Danger</k-button>

    <k-button size="xs">Extra small</k-button>
    <k-button size="sm">Small</k-button>
    <k-button size="md">Medium</k-button>
    <k-button size="lg">Large</k-button>
    <k-button size="xl">Extra Large</k-button>

    <k-button soft>Soft</k-button>

    <k-button soft>
      <slot name="prefixIcon">prefixIcon</slot>
      Some text
      <slot name="suffixIcons">suffixIcon</slot>
    </k-button>

    <k-button pill>Pill</k-button>
  </div>
</template>
