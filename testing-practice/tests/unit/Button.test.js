const Button = require('../../src/components/Button');

describe('Button Component', () => {
  let button;
  let clickHandler;

  beforeEach(() => {
    clickHandler = jest.fn();
    button = new Button('Click Me', clickHandler);
  });

  afterEach(() => {
    button = null;
    clickHandler = null;
  });

  describe('Button initialization', () => {
    test('should create button with text', () => {
      expect(button.getText()).toBe('Click Me');
    });
  });

  describe('Button click functionality', () => {
    test('should call onClick handler when clicked', () => {
      button.click();
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    test('should not call handler when disabled', () => {
      button.disable();
      button.click();
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });
});

describe('Button Component - Multiple Instances', () => {
  let buttons;
  
  beforeAll(() => {
    buttons = [
      new Button('Button 1', jest.fn()),
      new Button('Button 2', jest.fn())
    ];
  });

  test('should create multiple independent button instances', () => {
    buttons[0].click();
    buttons[1].click();
    expect(buttons[0].getClickCount()).toBe(1);
    expect(buttons[1].getClickCount()).toBe(1);
  });
});

