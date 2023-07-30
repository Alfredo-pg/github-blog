import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps, ReactNode } from "react";
import { LinkContainer } from "./syles";

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string
  icon?: ReactNode;
  variant?: 'arrowLeft'
}

export function Link({ text, icon , ...rest }: LinkProps) {
  return (
    <LinkContainer {...rest} >
      {text}
      {icon ?? <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
    </LinkContainer>
  )
}