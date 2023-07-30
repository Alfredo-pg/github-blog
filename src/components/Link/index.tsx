import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps } from "react";
import { LinkContainer } from "./syles";

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string
}

export function Link({ text, ...rest }: LinkProps) {
  return (
    <LinkContainer {...rest} >
      {text}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </LinkContainer>
  )
}