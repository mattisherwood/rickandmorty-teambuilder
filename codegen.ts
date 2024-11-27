import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/lib/schema.graphql",
  documents: "src/lib/queries.ts",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: [],
    },
  },
}

export default config
