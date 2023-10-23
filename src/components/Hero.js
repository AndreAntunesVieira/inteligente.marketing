import React, {useContext, useMemo} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import LinkButtonPrimary from "./misc/LinkButtonPrimary";
import ButtonPrimary from "./misc/ButtonPrimary";
import {DialogContext} from "./Layout/DialogContext";

const Hero = ({title,description, listUser, button, image, id, reverse}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const context = useContext(DialogContext)
  if(button.dialog) button.onClick = () => context.showDialog(button.dialog)

  return (
    <div
      className="mt-24 px-8 xl:px-16 mx-auto"
      style={{
        background: `radial-gradient(at top left, rgba(224,33,87,1) 0%, rgba(253,196,97,1) 100%)`
      }}
      id={id}
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
              {reverse && image && <div className="flex w-full">
                  <motion.div className="h-full w-full" variants={scrollAnimation}>
                      <Image
                          src={image}
                          alt="VPN Illustrasi"
                          quality={100}
                          width={200}
                          height={200}
                          layout="responsive"
                      />
                  </motion.div>
              </div>
              }
            <div className=" flex flex-col justify-center items-center row-start-2 sm:row-start-1 text-center">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal" dangerouslySetInnerHTML={{__html: title}} />
              <p className="text-white-500 mt-4 mb-6" dangerouslySetInnerHTML={{__html: description}} />
                { button && <>
                    {button.href && <LinkButtonPrimary href={button.href}>{button.text}</LinkButtonPrimary>}
                    {!button.href && <ButtonPrimary onClick={button.onClick}>{button.text}</ButtonPrimary>}
                </>}
            </div>
              {!reverse && image && <div className="flex w-full hidden md:flex">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src={image}
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={612}
                  layout="responsive"
                />
              </motion.div>
            </div>
              }
          </motion.div>
      </ScrollAnimationWrapper>

    </div>
  );
};

export default Hero;



