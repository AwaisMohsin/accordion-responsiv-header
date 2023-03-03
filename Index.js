function slideOut(accordion) {
    const content = accordion.nextElementSibling;
    const isExpanded = content.dataset.expanded === "true";
    content.style.maxHeight = !isExpanded
        ? content.scrollHeight + "px"
        : "0px";
    content.dataset.expanded = !isExpanded;
}