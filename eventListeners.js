// addEventListener(): in order for JavaScript to handle an event, we first need to tell it to listen for that event
// takes two arguments -> the name of the event to listen for, and a callback function to 'handle' the event

// Using an anonymous function (no name)
const input = document.getElementById('button');
input.addEventListener('click', function(){
    alert('I was clicked')
})

// Use a function name if you want to use it more than once
const input2 = document.getElementById('button');
function clickAlert(){
    alert('I was clicked')
}
input.addEventListener('click', clickAlert)

// Other events
// UI Events
// click: Fired when a pointing device button (usually a mouse) is pressed and released on an element.
// dblclick: Fired when a pointing device button is double-clicked on an element.
// contextmenu: Fired when the right button of the mouse is clicked (often used to trigger a context menu).
// mousedown: Fired when a pointing device button is pressed down on an element.
// mouseup: Fired when a pointing device button is released over an element.
// mousemove: Fired when a pointing device is moved while it is over an element.
// mouseenter: Fired when a pointing device is moved onto an element. Does not bubble.
// mouseleave: Fired when a pointing device is moved off an element. Does not bubble.
// mouseover: Fired when a pointing device is moved onto an element or one of its children.
// mouseout: Fired when a pointing device is moved off an element or one of its children.
// wheel: Fired when the user rotates a wheel button on a pointing device (typically a mouse).
// scroll: Fired when the document view or an element is scrolled.
// Keyboard Events
// keydown: Fired when a key is pressed down.
// keypress: (Deprecated) Fired when a key is pressed down and generates a character.
// keyup: Fired when a key is released.
// Form Events
// submit: Fired when a form is submitted.
// reset: Fired when a form is reset.
// focus: Fired when an element gains focus. Does not bubble.
// blur: Fired when an element loses focus. Does not bubble.
// change: Fired when the value of an element has been changed (e.g., <input>, <select>, <textarea>).
// input: Fired when the value of an element changes and is immediately reflected.
// select: Fired when some text in a text input or textarea is selected.
// invalid: Fired when an element’s value does not satisfy its constraints (e.g., required fields).
// Clipboard Events
// copy: Fired when the user initiates a copy action (Ctrl/Cmd + C).
// cut: Fired when the user initiates a cut action (Ctrl/Cmd + X).
// paste: Fired when the user initiates a paste action (Ctrl/Cmd + V).
// Drag and Drop Events
// drag: Fired when an element or text selection is being dragged.
// dragstart: Fired at the start of a drag operation.
// dragend: Fired at the end of a drag operation.
// dragenter: Fired when a dragged item enters a valid drop target.
// dragover: Fired when an element is being dragged over a valid drop target.
// dragleave: Fired when a dragged item leaves a valid drop target.
// drop: Fired when a dragged item is dropped on a valid drop target.
// Media Events
// play: Fired when playback is started or resumed.
// pause: Fired when playback is paused.
// ended: Fired when playback has stopped because the end of the media was reached.
// volumechange: Fired when the volume is changed.
// timeupdate: Fired when the playback position changes.
// Focus Events
// focusin: Fired when an element is about to receive focus. Bubbles.
// focusout: Fired when an element is about to lose focus. Bubbles.
// Touch Events
// touchstart: Fired when a touch point is placed on the touch surface.
// touchmove: Fired when a touch point is moved along the touch surface.
// touchend: Fired when a touch point is removed from the touch surface.
// touchcancel: Fired when a touch point has been disrupted in some way.
// Pointer Events
// pointerdown: Fired when a pointer becomes active (e.g., finger touches the screen, pen contacts the surface).
// pointerup: Fired when a pointer is no longer active.
// pointermove: Fired when a pointer changes coordinates.
// pointerenter: Fired when a pointer enters an element.
// pointerleave: Fired when a pointer leaves an element.
// pointerover: Fired when a pointer enters an element or one of its descendants.
// pointerout: Fired when a pointer leaves an element or one of its descendants.
// Animation Events
// animationstart: Fired when a CSS animation starts.
// animationend: Fired when a CSS animation ends.
// animationiteration: Fired when a CSS animation iteration is completed.
// Transition Events
// transitionstart: Fired when a CSS transition starts.
// transitionend: Fired when a CSS transition ends.
// transitioncancel: Fired when a CSS transition is cancelled.
// Miscellaneous Events
// load: Fired when a resource and its dependent resources have finished loading.
// unload: Fired when the document or a resource is being unloaded.
// resize: Fired when the document view (window) is resized.
// error: Fired when an error occurs during resource loading or script execution.
// beforeunload: Fired when the window, the document, and its resources are about to be unloaded.
// hashchange: Fired when the fragment identifier of the URL has changed.
// popstate: Fired when the active history entry changes.
// storage: Fired when a storage area (localStorage or sessionStorage) has been modified in another document.
// pagehide: Fired when the browser hides a page.
// pageshow: Fired when the browser shows a page.
// online: Fired when the browser has gained access to the network.
// offline: Fired when the browser has lost access to the network.
// Custom Events
// customEvent: You can create and dispatch custom events using the CustomEvent constructor. These are user-defined events that can be used to trigger custom behavior.