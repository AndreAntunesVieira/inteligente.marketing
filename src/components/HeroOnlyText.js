import React, {useContext, useMemo} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import LinkButtonPrimary from "./misc/LinkButtonPrimary";
import ButtonPrimary from "./misc/ButtonPrimary";
import {DialogContext} from "./Layout/DialogContext";

const HeroOnlyText = ({title, subtitle, listUser, button, image, id, reverse}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const context = useContext(DialogContext)
  if (button.dialog) button.onClick = () => context.showDialog(button.dialog)

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id={id}
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-1 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}>

          <div className=" flex flex-col justify-center items-start row-start-1 sm:row-start-1">
            <div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-center"
                  dangerouslySetInnerHTML={{__html: title}}/>
              <p className="text-black-500 mt-4 mb-6" dangerouslySetInnerHTML={{__html: subtitle}}/>
              {button && <>
                {button.href && <LinkButtonPrimary href={button.href}>{button.text}</LinkButtonPrimary>}
                {!button.href && <ButtonPrimary onClick={button.onClick}>{button.text}</ButtonPrimary>}
              </>}
            </div>
            <div>
              <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                <Image
                  src={image}
                  alt="VPN Illustrasi"
                  layout="responsive"
                  quality={100}
                  height={414}
                  width={508}
                  className="image-contain"
                />
              </motion.div>
            </div>
          </div>

        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default HeroOnlyText;



