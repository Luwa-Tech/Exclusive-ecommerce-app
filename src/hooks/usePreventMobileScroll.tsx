const usePreventMobileScroll = () => {
    let firstClientX = 0;
    let firstClientY = 0;
    const clientX = 0;
    const clientY = 0;

    //fix any parameter type
    const touchStart = (e: TouchEvent) => {
        firstClientX = e.touches[0].clientX;
        firstClientY = e.touches[0].clientY;
    }

    const preventTouch = (e: TouchEvent) => {
        const minValue = 5; //threshold

        firstClientX = e.touches[0].clientX - firstClientX;
        firstClientY = e.touches[0].clientY - firstClientY;

        //prevent vertival scroll when swiping horizontally
        if (Math.abs(clientX) > minValue) {
            e.preventDefault();
        }
    }

    return {touchStart, preventTouch}
}

export default usePreventMobileScroll