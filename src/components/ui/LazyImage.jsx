import { useState, useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${(props) => props.$borderRadius || "0"};
  background: var(--5, #f5f5f5);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: ${(props) => (props.$loaded ? 1 : 0)};
  transition: opacity 200ms ease-in;
`;

export default function LazyImage({
  src,
  alt,
  className,
  style,
  borderRadius,
  onLoad,
}) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(
    (e) => {
      setLoaded(true);
      onLoad?.(e);
    },
    [onLoad]
  );

  return (
    <Wrapper className={className} style={style} $borderRadius={borderRadius}>
      <Img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        $loaded={loaded}
        onLoad={handleLoad}
      />
    </Wrapper>
  );
}

