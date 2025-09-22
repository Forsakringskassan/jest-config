# Försäkringskassan shareable jest configurations

- `@forsakringskassan/jest-config` - Preset for NPM libraries.

## Versions

This package does not follow semantic versioning, instead the major version indicates which Jest version it uses.

| Version                             | Jest      |
| ----------------------------------- | --------- |
| `@forsakringskassan/jest-config@27` | `jest@27` |
| `@forsakringskassan/jest-config@28` | `jest@28` |
| `@forsakringskassan/jest-config@29` | `jest@29` |
| `@forsakringskassan/jest-config@30` | `jest@30` |

Breaking changes can be introduced in minor versions.

## Usage

### NPM library

> ```bash
> npm install --save-dev --save-exact @forsakringskassan/jest-config
> npm pkg set scripts.test=jest
> npm pkg set jest.preset=@forsakringskassan/jest-config
> ```

Or edit `package.json` manually:

```json
{
    "scripts": {
        "test": "jest"
    },
    "jest": {
        "preset": "@forsakringskassan/jest-config"
    }
}
```

You should uninstall the following packages from your `package.json`:

```bash
npm rm \
  jest \
  jest-environment-jsdom \
  jest-jasmine2 \
  jest-junit \
  jest-watch-typeahead \
  ts-jest
```

This package carries all required dependencies itself.

### Vue

Vue support has been removed (at least until `@vue/jest3-jest` supports Jest v30).
If you still need Vue support you should use `@forsakringskassan/jest-config-vue@29` (which uses Jest v29).

> ```bash
> npm install --save-dev --save-exact @forsakringskassan/jest-config-vue@29
> npm pkg set scripts.test=jest
> npm pkg set jest.preset=@forsakringskassan/jest-config-vue
> ```

Or edit `package.json` manually:

```json
{
    "scripts": {
        "test": "jest"
    },
    "jest": {
        "preset": "@forsakringskassan/jest-config-vue"
    }
}
```

You should uninstall the following packages from your `package.json`:

```bash
npm rm \
  @vue/vue2-jest \
  @vue/vue2-jest \
  @vue/cli-plugin-unit-jest \
  babel-jest \
  jest \
  jest-environment-jsdom \
  jest-jasmine2 \
  jest-junit \
  jest-serializer-vue \
  jest-transform-stub \
  jest-watch-typeahead \
  vue-jest \
  ts-jest
```

This package carries all required dependencies itself.
