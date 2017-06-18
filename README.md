# 💅 Styled-Media
> [Styled-Components](https://github.com/styled-components/styled-components/) media queries. Extracted from [this](https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates)

## How to use

```javascript
import media from 'styled-media`

const Container = styled.div`
  color: #333;
  ${media.desktop`padding: 0 20px;`}
  ${media.tablet`padding: 0 10px;`}
  ${media.phone`padding: 0 5px;`}
```

