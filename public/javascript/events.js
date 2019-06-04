const events = {
    hideElement: function (element) {
        if (element.style.display != 'none') {
            element.classList.add('hideElement')
        }
    },
    showElement: function (element) {
        if (element.style.display = none) {
            element.classList.remove('hideElement')
        }
    }
}
export default events
