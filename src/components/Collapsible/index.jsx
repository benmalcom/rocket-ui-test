import React, {useEffect, Fragment} from "react";
import PropTypes from "prop-types";
import "./Collapsible.sass";

const Collapsible = ({title, children}) => {
    useEffect(() => {
        attachClickEvt();
        return removeClickEvt;
    }, []);
    return <Fragment>
        <button type="button" className="accordion">{title}</button>
        <div className="panel">
            <div className="content">{children}</div>
        </div>
    </Fragment>
};

Collapsible.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapsible;

function closeCollapse(element) {
    element.classList.remove("active");
    // eslint-disable-next-line no-param-reassign
    element.nextElementSibling.style.maxHeight = null;
}

function openCollapse(element) {
    element.classList.toggle("active");
    const panel = element.nextElementSibling;
    const isPanelExpanded = !!panel.style.maxHeight;
    panel.style.maxHeight = isPanelExpanded ? null : `${panel.scrollHeight}px`;
}

function handleClick(event) {
    const {target} = event;
    if (target.classList.contains('accordion')) {
        const previouslyOpened = document.querySelector('.accordion.active');
        if (previouslyOpened && previouslyOpened !== target) {
            closeCollapse(previouslyOpened);
        }
        openCollapse(target);
    }
}

function attachClickEvt() {
    // Attach a click event listener to element inside the body the class accordion
    document.body.addEventListener('click', handleClick);
}

function removeClickEvt() {
    // Remove listener
    document.body.removeEventListener('click', handleClick);
}
