const usePreventMobileScroll = () => {
    let firstClientX = 0;
    let clientX = 0; //used for horizontal swiping detection

    //fix any parameter type
    const touchStart = (e: TouchEvent) => {
        firstClientX = e.touches[0].clientX;
    }

    const preventTouch = (e: TouchEvent) => {
        const minValue = 5; //threshold

        clientX = e.touches[0].clientX - firstClientX;

        //prevent vertival scroll when swiping horizontally
        if (Math.abs(clientX) > minValue) {
            e.preventDefault();
        }
    }

    return {touchStart, preventTouch}
}

export default usePreventMobileScroll