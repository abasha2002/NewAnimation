document.addEventListener('DOMContentLoaded', () => {

    function heroBeforeAnimation() {
        const scrollBefore = document.querySelector(".loop-marquee_item-before");
        const innerContentBefore = Array.from(scrollBefore.children);

        innerContentBefore.forEach(item => {
            const duplicateBefore = item.cloneNode(true);
            duplicateBefore.setAttribute("aria-hidden", true);
            duplicateBefore.classList.add("duplicated-before-item");
            scrollBefore.appendChild(duplicateBefore);
        });

        
        scrollBefore.setAttribute('data-duplicated', true);
        console.log('Items duplicated successfully for:', scrollBefore);
    } 

    function heroAfterAnimation(){
        const scrollAfter = document.querySelector(".loop-marquee_item-after");
        const innerContentAfter = Array.from(scrollAfter.children);

        innerContentAfter.forEach(item => {
            const duplicateAfter = item.cloneNode(true);
            duplicateAfter.setAttribute("aria-hidden", true);
            duplicateAfter.classList.add("duplicated-after-item");
            scrollAfter.appendChild(duplicateAfter);
        });
    }


    heroBeforeAnimation();
    heroAfterAnimation();
});
