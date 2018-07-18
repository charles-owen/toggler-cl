/**
 * @file
 */

import './toggler.scss';
import {Tools} from './DOM/Tools.js';

export let Toggler = function() {
}

Toggler.VELOCITY = 1000;     // Animation speed in pixels per second


Toggler.install = function () {
    document.body.onclick = (event) => {

        let clickedOn = event.target;
        let parent = clickedOn.parentNode;

        if (clickedOn.tagName === 'A' &&
            parent.parentNode.tagName === 'DIV' &&
            parent.parentNode.classList.contains('cl-toggle')) {
            // We clicked on the link inside of the toggle block
            event.preventDefault();
            toggle(parent);
        }

        if (parent.tagName === 'DIV' &&
            parent.children[0] === clickedOn &&
            parent.classList.contains('cl-toggle')) {
            event.preventDefault();
            toggle(clickedOn);
        }
    }

    function toggle(clickedOn) {
        let parent = clickedOn.parentNode;
        for (let child of parent.children) {
            if (child.tagName === 'DIV') {
                let block = child;
                if (Tools.isVisible(block)) {
                    slideOff(block, clickedOn);
                } else {
                    slideOn(block, clickedOn);
                }
            }
        }

    }

    function slideOn(block, clickedOn) {
        let maxHeight = getHeight(block);
        let duration = maxHeight / Toggler.VELOCITY * 1000;

        block.style.transform = 'scaleY(0.01)';
        block.style.marginBottom = '-100%';
        block.style.display = 'block';
        let t = 0;

        let last = +new Date();
        let tick = function() {
            let tm  = +new Date();
            t += (tm - last) / duration;
            last = tm;

            if(t < 1) {
                block.style.transform = 'scaleY(' + t + ')';
                block.style.marginBottom = '-' + ((1-t) * maxHeight) + 'px';
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            } else {
                block.style.transform = 'scaleY(1)';
                block.style.marginBottom = 0;
                Tools.addClass(clickedOn, 'visible');
            }
        };

        tick();
    }

    function slideOff(block, clickedOn) {
        let maxHeight = getHeight(block);
        let duration = maxHeight / Toggler.VELOCITY * 1000;

        block.style.transform = 'scaleY(1)';
        block.style.marginBottom = 0;
        block.style.display = 'block';
        let t = 1;

        let last = +new Date();
        let tick = function() {
            let tm  = +new Date();
            t -= (tm - last) / duration;
            last = tm;

            if(t > 0) {
                block.style.transform = 'scaleY(' + t + ')';
                block.style.marginBottom = '-' + ((1-t) * maxHeight) + 'px';
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            } else {
                block.style.display = 'none';
                Tools.removeClass(clickedOn, 'visible');
                block.style.marginBottom = 0;
            }
        };

        tick();
    }

    function getHeight(el, gotIt) {
        var el_style      = window.getComputedStyle(el),
            el_display    = el_style.display,
            el_position   = el_style.position,
            el_visibility = el_style.visibility,
            el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

            wanted_height = 0;


        // if its not hidden we just return normal height
        if(el_display !== 'none' && el_max_height !== '0') {
            return el.offsetHeight;
        }

        // the element is hidden so:
        // making the el block so we can meassure its height but still be hidden
        el.style.position   = 'absolute';
        el.style.visibility = 'hidden';
        el.style.display    = 'block';

        wanted_height     = el.offsetHeight;

        // reverting to the original values
        el.style.display    = el_display;
        el.style.position   = el_position;
        el.style.visibility = el_visibility;

        return wanted_height;
    };

}

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(Toggler.install);

