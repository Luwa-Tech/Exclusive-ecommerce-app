import useRenderHook from "../../hooks/useRenderHook"
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"

type ProductSliderType = {
  sectionCaption?: string,
  sectionTitle?: string,
  prev: () => void,
  next: () => void
}

const ProductSlider = (props: ProductSliderType) => {
  const {isDesktop} = useRenderHook()
 

  return (
    <>
    <div className="flex items-center gap-[.7rem]">
      <span className="w-[1rem] md:w-[1.25rem] h-[2rem] md:h-[2.5rem] bg-secondary-700"></span>
      <span className=" mr-[1.5rem] text-[.8rem] md:text-[1rem] font-semibold text-secondary-700 md:leading-[1.25rem]">{props.sectionCaption}</span>
    </div>

    <div className="flex justify-between items-center mb:mb-[2.2rem] mb-[1.5rem]"> 
      <h2 className="text-[1.2rem] md:text-[2rem] font-semibold md:leading-[3rem] md:tracking-[0.09rem] text-textColor-600 md:mb-[0.4rem]">{props.sectionTitle}</h2>

       {
          isDesktop && <div className="flex gap-1 pr-3">
          <span onClick={props.prev} className="cursor-pointer md:px-[.3rem] text-[1.5rem] md:py-[.3rem] md:rounded-[1rem] bg-secondary-500">
              <BsArrowLeftShort />
          </span>
          <span onClick={props.next} className="cursor-pointer md:px-[.3rem] text-[1.5rem] md:py-[.3rem] md:rounded-[1rem] bg-secondary-500">
          <BsArrowRightShort />
          </span>
      </div>
      }
    </div>
    </>
  )
}

export default ProductSlider