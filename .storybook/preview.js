import "../plugin/styles.css";
import "tachyons";
import { addDecorator, addParameters } from "@storybook/vue";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
addParameters({
  options: {
    showRoots: true
  }
});
