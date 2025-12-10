// Simple Button component for UI testing

class Button {
  constructor(text, onClick) {
    this.text = text;
    this.onClick = onClick;
    this.disabled = false;
    this.clickCount = 0;
  }

  click() {
    if (!this.disabled && this.onClick) {
      this.clickCount++;
      this.onClick();
    }
  }

  disable() {
    this.disabled = true;
  }

  enable() {
    this.disabled = false;
  }

  getText() {
    return this.text;
  }

  getClickCount() {
    return this.clickCount;
  }

  isDisabled() {
    return this.disabled;
  }
}

module.exports = Button;
