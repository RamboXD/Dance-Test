const chars = [
  {
    name: "lastochka",
    svg: `<svg width="141" height="195" viewBox="0 0 141 195" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
<path style="fill: white" fill-rule="evenodd" clip-rule="evenodd" d="M87.5 34.5H81L72.5 30.5L68.5 27L67 20V12L70.5 4.5L77 0H83.5L89.5 2L95.5 6.5L99 15L97.5 25.5L93.5 30.5L87.5 34.5ZM106.5 51H97.5L94.5 40.5H96L101.5 39.5H113H124.5H136L141 43V48L134.5 51H122.5H106.5ZM61 36.5L56 39L53.5 47.5V56.5L52 71.5L49.5 83V94L46.5 96.5H38.5H30.5L24 85.5L18.5 74L14.5 65L11.5 61L14.5 58L24 56.5L36.5 54.5L46.5 53H49.5V42L7 47.5L4 53L7 58L0 61L2 71.5L7 83L13 96.5L18.5 111.5L26 114H61L64.5 191L69 194.5H75L77.5 189L79 178.5V101.5L93 53V47.5L88.5 42L77.5 39L64.5 36.5H61Z" fill="black"/>
</svg>`,
  },
  {
    name: "balakai",
    svg: `<svg width="98" height="218" viewBox="0 0 98 218" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
    <path style="fill: white" fill-rule="evenodd" clip-rule="evenodd" d="M78 9.5V3.5L71.5 0.5L39.5 27.5L36 60L13.5 121L5 165L0 199V209.5L2.5 215H11.5L17 209.5L21.5 184L26 152L30 133L36 156.5L44.5 190L50.5 215L55.5 218L64.5 216.5L68 209.5L48.5 130.5L54 121L78 80V72L71.5 65.5L50.5 52.5L54 32L64.5 21L71.5 14.5L78 9.5ZM89.5 94.5L82.5 79L73.5 92.5L82.5 107.5L60.5 121L57.5 125.5V129.5L62.5 131.5L66.5 129.5L82.5 121L97.5 111.5V109L89.5 94.5ZM88.5 33L83.5 28.5L74.5 27L66.5 30L60.5 37L59 46L62 54.5L69 60L77 61.5L83.5 60L90 54.5L92.5 48V41.5L88.5 33Z" fill="black"/>
    </svg>`,
  },
  {
    name: "kolkoteru",
    svg: `<svg width="117" height="214" viewBox="0 0 117 214" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
    <path style="fill: white" fill-rule="evenodd" clip-rule="evenodd" d="M99 0L74 8L57.5 14.5L36 52L19.5 92.5L12 112.5L0.5 201V210L6 214L13.5 211.5L16.5 207.5L29 128L54 211.5L57.5 214L64 211.5L68 207.5L48.5 126L77 81L111 59L117 17.5L112.5 13.5L106.5 17.5L101 44L99 52L81 63L54 50L68 24L101 10.5L103 4L99 0ZM70.5 51.5L79.5 55.5H88L95.5 48.5L99.5 38.5L95.5 26L83.5 21L72.5 23.5L66 32V44L70.5 51.5Z" fill="black"/>
    </svg>`,
  },
  {
    name: "breakdance",
    svg: `<svg width="136" height="170" viewBox="0 0 136 170" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
    <path style="fill: white" fill-rule="evenodd" clip-rule="evenodd" d="M103.242 4.72222L92.8187 11.8056L80.9066 12.9861H74.9505H73.4615L74.9505 16.5278C75.4469 17.3148 76.4396 19.125 76.4396 20.0694C76.4396 21.0139 77.4322 22.037 77.9286 22.4306C77.9286 22.8241 78.2264 23.8472 79.4176 24.7917C80.6088 25.7361 81.8993 28.3333 82.3956 29.5139C83.8846 30.3009 86.8626 32.1111 86.8626 33.0556C86.8626 34 88.848 37.3843 89.8407 38.9583L91.3297 43.6806C91.826 45.2546 92.8187 48.6389 92.8187 49.5833V57.8472V66.1111C92.8187 66.7014 93.5632 68.1771 94.3077 69.6528C95.0522 71.1285 95.7967 72.6042 95.7967 73.1944C95.7967 74.1389 104.731 95.625 109.198 106.25V113.333L106.22 114.514H101.753L97.2857 113.333L95.7967 110.972L89.8407 100.347L86.8626 95.625L77.9286 63.75L76.4396 61.3889L68.9945 64.9306L63.0385 69.6528L57.0824 74.375L52.6154 79.0972V82.6389C51.6227 84.213 49.3396 87.5972 48.1483 88.5417C46.9571 89.4861 44.674 89.7222 43.6813 89.7222L39.2143 93.2639L25.8132 114.514L24.3242 122.778L60.0604 155.833L61.5494 161.736V164.097L60.0604 165.278L55.5934 168.819L54.1044 170H49.6374H45.1703L43.6813 168.819L40.7033 165.278L25.8132 152.292L13.9011 139.306C10.9231 136.551 4.66923 130.806 3.47802 129.861C2.28681 128.917 0.996337 126.319 0.5 125.139V118.056L3.47802 102.708L15.3901 75.5556L30.2802 54.3056L43.6813 42.5L60.0604 34.2361L64.5275 33.0556L67.5055 31.875L61.5494 24.7917L55.5934 12.9861L52.6154 5.90278L55.5934 0H58.5714H92.8187H98.7747L100.264 1.18056L101.753 3.54167L103.242 4.72222ZM113.665 40.1389C126 40.1389 136 32.2106 136 22.4305C136 12.6505 126 4.72219 113.665 4.72219C101.329 4.72219 91.3296 12.6505 91.3296 22.4305C91.3296 32.2106 101.329 40.1389 113.665 40.1389Z" fill="black"/>
    </svg>`,
  },
  {
    name: "dubstep",
    svg: '<svg width="116" height="208" viewBox="0 0 116 208" xmlns="http://www.w3.org/2000/svg" style="z-index: 5;"> <path style="fill: white" fill-rule="evenodd" clip-rule="evenodd" d="M47.2335 23.3184L45.1497 28.9148L43.0659 28.9148V29.8475L43.7605 30.7803L45.1497 33.5785V38.2421L43.7605 41.0404L41.6766 41.9731L38.8982 44.7713L35.4251 46.6368L31.9521 47.5695L27.7844 49.435H26.205H25.7006L20.8383 52.2332L16.6707 54.0987L12.503 55.9641L9.02994 56.8969L6.94611 58.7623H3.47305C3.00998 58.7623 2.08383 58.5758 2.08383 57.8296C2.08383 57.3632 1.73653 57.13 1.38922 56.8969C1.04192 56.6637 0.694611 56.4305 0.694611 55.9641C0.694611 55.2179 0.231537 53.7877 0 53.1659V51.3004V49.435L2.77844 46.6368L4.16766 44.7713L11.8084 41.0404L17.3653 38.2421C18.523 37.6203 20.9772 36.3767 21.5329 36.3767C22.0886 36.3767 23.6168 35.7549 24.3114 35.4439C25.006 35.133 26.5341 34.5112 27.0898 34.5112C27.7844 34.5112 29.1737 33.5785 29.8683 32.6457C30.424 31.8995 31.9521 31.713 32.6467 31.713L36.1198 29.8475L39.5928 28.9148L38.2036 28.9148H36.1198L34.7305 29.8475L32.6467 30.7803L30.5629 31.713L28.479 32.6457L26.3952 31.713C25.9321 31.4021 24.8671 30.7803 24.3114 30.7803C23.7557 30.7803 22.6906 28.9148 22.2275 27.9821C21.7645 26.5997 20.8383 23.7316 20.8383 23.3184V20.5202V15.8565V12.1256C20.8383 11.3794 21.7645 9.32735 22.2275 8.39462L24.3114 4.66368L27.7844 0.932735C28.7106 0.621824 30.7018 0 31.2575 0H34.7305C35.2862 0 37.2774 0.621824 38.2036 0.932735L40.2874 1.86547L43.0659 4.66368L45.1497 7.46188L46.5389 12.1256L47.9281 17.722L47.2335 23.3184ZM17.3653 55.9641L20.1437 61.5605L23.6168 66.2242C24.0798 67.1569 25.006 69.209 25.006 69.9551C25.006 70.7013 26.3952 75.8625 27.0898 78.3498L27.7844 94.2063V99.8027L27.0898 103.534L25.7006 112.861L22.9222 117.525L20.1437 123.121C19.4491 124.676 17.921 127.971 17.3653 128.717C16.8096 129.464 13.8922 135.247 12.503 138.045L9.72455 145.507L7.64072 155.767L9.72455 201.471L12.503 206.135L14.5868 208H16.6707C16.8827 208 19.0744 206.756 20.1437 206.135L22.2275 204.269V202.404V157.632L42.3713 124.054H46.5389L75.018 145.507L76.4072 197.74L78.491 201.471L81.2695 202.404H82.8677L84.7425 201.471L88.9102 195.874V145.507L87.521 134.314L58.3473 98.8699L55.5689 85.8116V56.8968L61.1258 44.7713L73.6287 35.4439L92.3832 26.1166L109.748 18.6547L113.916 14.9238L116 10.2601L115.305 7.46187L112.527 4.66367H107.665L94.4671 11.1928L48.6228 32.6457H47.2335H45.8443L46.5389 39.1749L42.3713 42.9058L37.509 46.6368C36.1198 47.5695 33.0635 49.435 31.9521 49.435C31.1383 49.435 29.8478 50.0751 28.7787 50.6054C28.0228 50.9804 27.3775 51.3004 27.0898 51.3004C26.5341 51.3004 24.0798 52.5441 22.9222 53.1659L20.1437 54.0986L17.3653 55.9641Z" fill="black"/></svg>',
  },
  {
    name: "spider",
    svg: `<svg width="165" height="175" viewBox="0 0 165 175" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
      <path style="fill: white" fill-rule="evenodd" clip-rule="evenodd" d="M35.5385 24.0458L44.4231 40.0763L29.1923 48.0916L26.6538 45.4198V40.0763L22.8462 33.3969L19.0385 28.0534L10.1538 20.0382L2.53846 16.0305L0 8.01527L1.26923 2.67176L6.34615 0L13.9615 2.67176L20.3077 8.01527L29.1923 16.0305L35.5385 24.0458ZM63.4615 62.7863C63.4615 73.1152 54.9377 81.4885 44.4231 81.4885C33.9084 81.4885 25.3846 73.1152 25.3846 62.7863C25.3846 52.4573 33.9084 44.084 44.4231 44.084C54.9377 44.084 63.4615 52.4573 63.4615 62.7863ZM64.7308 81.4885H67.2692L73.6154 82.8244L76.1538 93.5115L78.6923 101.527V118.893L81.2308 122.901L83.7692 126.908L91.3846 133.588L102.808 140.267L112.962 149.618L123.115 157.634L134.538 165.649L147.231 172.328H154.846L159.923 170.992L163.731 166.985L165 161.641L163.731 158.969L159.923 154.962L153.577 150.954L147.231 146.947L137.077 138.931L123.115 129.58L109.154 117.557L100.269 110.878L91.3846 101.527L85.0385 93.5115L81.2308 82.8244C77.8462 77.0356 70.8231 65.458 69.8077 65.458C68.7923 65.458 66 62.7863 64.7308 61.4504V65.458L62.1923 70.8015L58.3846 76.145L52.0385 81.4885H44.4231H36.8077V85.4962L40.6154 92.1756L48.2308 100.191L54.5769 105.534L59.6538 110.878V101.527L57.1154 92.1756L58.3846 85.4962L60.9231 81.4885H62.1923L58.3846 86.8321L59.6538 98.855L62.1923 110.878V128.244V152.29L63.4615 162.977L66 169.656H72.3462L77.4231 165.649V158.969V141.603V128.244V116.221V100.191L74.8846 89.5038L72.3462 82.8244L64.7308 81.4885ZM26.6538 102.863C31.3077 101.527 40.8692 98.5878 41.8846 97.5191L45.6923 101.527L52.0385 106.87L58.3846 110.878V116.221L30.4615 125.573L27.9231 137.595L26.6538 152.29L24.1154 165.649L21.5769 169.656L16.5 175H10.1538L3.80769 168.321L6.34615 146.947L10.1538 116.221L15.2308 109.542L26.6538 102.863Z" fill="black"/>
      </svg>`,
  },
  {
    name: "zvezda",
    svg: `<svg width="145" height="190" viewBox="0 0 145 190" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
    <path style="fill: white" fill-rule="evenodd" clip-rule="evenodd" d="M73 30C81.8366 30 89 23.2843 89 15C89 6.7157 81.8366 0 73 0C64.1634 0 57 6.7157 57 15C57 23.2843 64.1634 30 73 30ZM61.5 35.5H72H84.5L89.5 39.5L91.5 44V48.5V112.5L98 135L104.5 156L109 172L110.5 182V187L107.5 190H101.5L97 186L93 175.5L83.5 142L75 117.5H69.5V119L68 126L67 135L64.5 143L60.5 163.5L56.5 183.5L55.5 188.5L50.5 190L45 188.5L42.5 182L45 166.5L48 149.5L49 139L50.5 127L53 110V94V64V45.5C53 44.7 53.6667 42.1667 54 41L61.5 35.5ZM93.5 39L95 44.5V50V52.5L141.5 51.5L144.5 48V43L140 40L93.5 39ZM51 40.5L49.5 44V49V51.5L37.5 52.5H22C21.5 52.5 17.875 52.25 14.25 52C10.625 51.75 7 51.5 6.5 51.5C5.7 51.5 3.16666 50.5 2 50C1.33334 49 0 46.7 0 45.5C0 44.3 1.33334 41.6667 2 40.5H5.5H29.5L49.5 39.5H51V40.5Z" fill="black"/>
    </svg>`,
  },
  {
    name: "prikaz",
    svg: `<svg width="122" height="230" viewBox="0 0 122 230" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
      <path style="fill: white" fill-rule="evenodd" clip-rule="evenodd" d="M76.641 38.764C89.5985 38.764 100.103 30.0864 100.103 19.382C100.103 8.67763 89.5985 0 76.641 0C63.6836 0 53.1795 8.67763 53.1795 19.382C53.1795 30.0864 63.6836 38.764 76.641 38.764ZM48.4872 11.6293C47.2359 11.6293 43.7949 10.7678 42.2308 10.3371H37.5385L23.4615 18.0899L0 36.1798V43.9326L4.69231 46.5169L15.641 50.3933C17.7265 51.2547 22.2103 53.236 23.4615 54.2697C24.7128 55.3034 33.3675 59.0075 37.5385 60.7304L43.7949 64.6068L50.0513 72.3596L48.4872 222.247L54.7436 228.708L62.5641 230L70.3846 224.831L71.9487 220.955L73.5128 142.135H78.2051L79.7692 224.831L86.0256 228.708L92.2821 230L96.9744 227.416L101.667 223.539L100.103 81.4045L104.795 102.079L109.487 125.337L114.179 126.629L118.872 125.337L122 116.292L120.436 89.1573C119.393 81.4045 117.308 65.6405 117.308 64.6068C117.308 63.5731 114.179 51.2547 112.615 45.2248L104.795 42.6405H32.8462L25.0256 40.0562L26.5897 34.8877L43.7949 24.5506L50.0513 20.6742L51.6154 15.5057L48.4872 11.6293Z" fill="black"/>
      </svg>`,
  },
];

let greenSvgs = [
  {
    name: "lastochka",
    svg: `<svg width="141" height="195" viewBox="0 0 141 195" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
<path style="fill: green" fill-rule="evenodd" clip-rule="evenodd" d="M87.5 34.5H81L72.5 30.5L68.5 27L67 20V12L70.5 4.5L77 0H83.5L89.5 2L95.5 6.5L99 15L97.5 25.5L93.5 30.5L87.5 34.5ZM106.5 51H97.5L94.5 40.5H96L101.5 39.5H113H124.5H136L141 43V48L134.5 51H122.5H106.5ZM61 36.5L56 39L53.5 47.5V56.5L52 71.5L49.5 83V94L46.5 96.5H38.5H30.5L24 85.5L18.5 74L14.5 65L11.5 61L14.5 58L24 56.5L36.5 54.5L46.5 53H49.5V42L7 47.5L4 53L7 58L0 61L2 71.5L7 83L13 96.5L18.5 111.5L26 114H61L64.5 191L69 194.5H75L77.5 189L79 178.5V101.5L93 53V47.5L88.5 42L77.5 39L64.5 36.5H61Z" fill="black"/>
</svg>`,
  },
  {
    name: "balakai",
    svg: `<svg width="98" height="218" viewBox="0 0 98 218" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
  <path style="fill: green" fill-rule="evenodd" clip-rule="evenodd" d="M78 9.5V3.5L71.5 0.5L39.5 27.5L36 60L13.5 121L5 165L0 199V209.5L2.5 215H11.5L17 209.5L21.5 184L26 152L30 133L36 156.5L44.5 190L50.5 215L55.5 218L64.5 216.5L68 209.5L48.5 130.5L54 121L78 80V72L71.5 65.5L50.5 52.5L54 32L64.5 21L71.5 14.5L78 9.5ZM89.5 94.5L82.5 79L73.5 92.5L82.5 107.5L60.5 121L57.5 125.5V129.5L62.5 131.5L66.5 129.5L82.5 121L97.5 111.5V109L89.5 94.5ZM88.5 33L83.5 28.5L74.5 27L66.5 30L60.5 37L59 46L62 54.5L69 60L77 61.5L83.5 60L90 54.5L92.5 48V41.5L88.5 33Z" fill="black"/>
  </svg>`,
  },
  {
    name: "kolkoteru",
    svg: `<svg width="117" height="214" viewBox="0 0 117 214" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
  <path style="fill: green" fill-rule="evenodd" clip-rule="evenodd" d="M99 0L74 8L57.5 14.5L36 52L19.5 92.5L12 112.5L0.5 201V210L6 214L13.5 211.5L16.5 207.5L29 128L54 211.5L57.5 214L64 211.5L68 207.5L48.5 126L77 81L111 59L117 17.5L112.5 13.5L106.5 17.5L101 44L99 52L81 63L54 50L68 24L101 10.5L103 4L99 0ZM70.5 51.5L79.5 55.5H88L95.5 48.5L99.5 38.5L95.5 26L83.5 21L72.5 23.5L66 32V44L70.5 51.5Z" fill="black"/>
  </svg>`,
  },
  {
    name: "breakdance",
    svg: `<svg width="136" height="170" viewBox="0 0 136 170" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
  <path style="fill: green" fill-rule="evenodd" clip-rule="evenodd" d="M103.242 4.72222L92.8187 11.8056L80.9066 12.9861H74.9505H73.4615L74.9505 16.5278C75.4469 17.3148 76.4396 19.125 76.4396 20.0694C76.4396 21.0139 77.4322 22.037 77.9286 22.4306C77.9286 22.8241 78.2264 23.8472 79.4176 24.7917C80.6088 25.7361 81.8993 28.3333 82.3956 29.5139C83.8846 30.3009 86.8626 32.1111 86.8626 33.0556C86.8626 34 88.848 37.3843 89.8407 38.9583L91.3297 43.6806C91.826 45.2546 92.8187 48.6389 92.8187 49.5833V57.8472V66.1111C92.8187 66.7014 93.5632 68.1771 94.3077 69.6528C95.0522 71.1285 95.7967 72.6042 95.7967 73.1944C95.7967 74.1389 104.731 95.625 109.198 106.25V113.333L106.22 114.514H101.753L97.2857 113.333L95.7967 110.972L89.8407 100.347L86.8626 95.625L77.9286 63.75L76.4396 61.3889L68.9945 64.9306L63.0385 69.6528L57.0824 74.375L52.6154 79.0972V82.6389C51.6227 84.213 49.3396 87.5972 48.1483 88.5417C46.9571 89.4861 44.674 89.7222 43.6813 89.7222L39.2143 93.2639L25.8132 114.514L24.3242 122.778L60.0604 155.833L61.5494 161.736V164.097L60.0604 165.278L55.5934 168.819L54.1044 170H49.6374H45.1703L43.6813 168.819L40.7033 165.278L25.8132 152.292L13.9011 139.306C10.9231 136.551 4.66923 130.806 3.47802 129.861C2.28681 128.917 0.996337 126.319 0.5 125.139V118.056L3.47802 102.708L15.3901 75.5556L30.2802 54.3056L43.6813 42.5L60.0604 34.2361L64.5275 33.0556L67.5055 31.875L61.5494 24.7917L55.5934 12.9861L52.6154 5.90278L55.5934 0H58.5714H92.8187H98.7747L100.264 1.18056L101.753 3.54167L103.242 4.72222ZM113.665 40.1389C126 40.1389 136 32.2106 136 22.4305C136 12.6505 126 4.72219 113.665 4.72219C101.329 4.72219 91.3296 12.6505 91.3296 22.4305C91.3296 32.2106 101.329 40.1389 113.665 40.1389Z" fill="black"/>
  </svg>`,
  },
  {
    name: "dubstep",
    svg: '<svg width="116" height="208" viewBox="0 0 116 208" xmlns="http://www.w3.org/2000/svg" style="z-index: 5;"> <path style="fill: green" fill-rule="evenodd" clip-rule="evenodd" d="M47.2335 23.3184L45.1497 28.9148L43.0659 28.9148V29.8475L43.7605 30.7803L45.1497 33.5785V38.2421L43.7605 41.0404L41.6766 41.9731L38.8982 44.7713L35.4251 46.6368L31.9521 47.5695L27.7844 49.435H26.205H25.7006L20.8383 52.2332L16.6707 54.0987L12.503 55.9641L9.02994 56.8969L6.94611 58.7623H3.47305C3.00998 58.7623 2.08383 58.5758 2.08383 57.8296C2.08383 57.3632 1.73653 57.13 1.38922 56.8969C1.04192 56.6637 0.694611 56.4305 0.694611 55.9641C0.694611 55.2179 0.231537 53.7877 0 53.1659V51.3004V49.435L2.77844 46.6368L4.16766 44.7713L11.8084 41.0404L17.3653 38.2421C18.523 37.6203 20.9772 36.3767 21.5329 36.3767C22.0886 36.3767 23.6168 35.7549 24.3114 35.4439C25.006 35.133 26.5341 34.5112 27.0898 34.5112C27.7844 34.5112 29.1737 33.5785 29.8683 32.6457C30.424 31.8995 31.9521 31.713 32.6467 31.713L36.1198 29.8475L39.5928 28.9148L38.2036 28.9148H36.1198L34.7305 29.8475L32.6467 30.7803L30.5629 31.713L28.479 32.6457L26.3952 31.713C25.9321 31.4021 24.8671 30.7803 24.3114 30.7803C23.7557 30.7803 22.6906 28.9148 22.2275 27.9821C21.7645 26.5997 20.8383 23.7316 20.8383 23.3184V20.5202V15.8565V12.1256C20.8383 11.3794 21.7645 9.32735 22.2275 8.39462L24.3114 4.66368L27.7844 0.932735C28.7106 0.621824 30.7018 0 31.2575 0H34.7305C35.2862 0 37.2774 0.621824 38.2036 0.932735L40.2874 1.86547L43.0659 4.66368L45.1497 7.46188L46.5389 12.1256L47.9281 17.722L47.2335 23.3184ZM17.3653 55.9641L20.1437 61.5605L23.6168 66.2242C24.0798 67.1569 25.006 69.209 25.006 69.9551C25.006 70.7013 26.3952 75.8625 27.0898 78.3498L27.7844 94.2063V99.8027L27.0898 103.534L25.7006 112.861L22.9222 117.525L20.1437 123.121C19.4491 124.676 17.921 127.971 17.3653 128.717C16.8096 129.464 13.8922 135.247 12.503 138.045L9.72455 145.507L7.64072 155.767L9.72455 201.471L12.503 206.135L14.5868 208H16.6707C16.8827 208 19.0744 206.756 20.1437 206.135L22.2275 204.269V202.404V157.632L42.3713 124.054H46.5389L75.018 145.507L76.4072 197.74L78.491 201.471L81.2695 202.404H82.8677L84.7425 201.471L88.9102 195.874V145.507L87.521 134.314L58.3473 98.8699L55.5689 85.8116V56.8968L61.1258 44.7713L73.6287 35.4439L92.3832 26.1166L109.748 18.6547L113.916 14.9238L116 10.2601L115.305 7.46187L112.527 4.66367H107.665L94.4671 11.1928L48.6228 32.6457H47.2335H45.8443L46.5389 39.1749L42.3713 42.9058L37.509 46.6368C36.1198 47.5695 33.0635 49.435 31.9521 49.435C31.1383 49.435 29.8478 50.0751 28.7787 50.6054C28.0228 50.9804 27.3775 51.3004 27.0898 51.3004C26.5341 51.3004 24.0798 52.5441 22.9222 53.1659L20.1437 54.0986L17.3653 55.9641Z" fill="black"/></svg>',
  },
  {
    name: "spider",
    svg: `<svg width="165" height="175" viewBox="0 0 165 175" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
    <path style="fill: green" fill-rule="evenodd" clip-rule="evenodd" d="M35.5385 24.0458L44.4231 40.0763L29.1923 48.0916L26.6538 45.4198V40.0763L22.8462 33.3969L19.0385 28.0534L10.1538 20.0382L2.53846 16.0305L0 8.01527L1.26923 2.67176L6.34615 0L13.9615 2.67176L20.3077 8.01527L29.1923 16.0305L35.5385 24.0458ZM63.4615 62.7863C63.4615 73.1152 54.9377 81.4885 44.4231 81.4885C33.9084 81.4885 25.3846 73.1152 25.3846 62.7863C25.3846 52.4573 33.9084 44.084 44.4231 44.084C54.9377 44.084 63.4615 52.4573 63.4615 62.7863ZM64.7308 81.4885H67.2692L73.6154 82.8244L76.1538 93.5115L78.6923 101.527V118.893L81.2308 122.901L83.7692 126.908L91.3846 133.588L102.808 140.267L112.962 149.618L123.115 157.634L134.538 165.649L147.231 172.328H154.846L159.923 170.992L163.731 166.985L165 161.641L163.731 158.969L159.923 154.962L153.577 150.954L147.231 146.947L137.077 138.931L123.115 129.58L109.154 117.557L100.269 110.878L91.3846 101.527L85.0385 93.5115L81.2308 82.8244C77.8462 77.0356 70.8231 65.458 69.8077 65.458C68.7923 65.458 66 62.7863 64.7308 61.4504V65.458L62.1923 70.8015L58.3846 76.145L52.0385 81.4885H44.4231H36.8077V85.4962L40.6154 92.1756L48.2308 100.191L54.5769 105.534L59.6538 110.878V101.527L57.1154 92.1756L58.3846 85.4962L60.9231 81.4885H62.1923L58.3846 86.8321L59.6538 98.855L62.1923 110.878V128.244V152.29L63.4615 162.977L66 169.656H72.3462L77.4231 165.649V158.969V141.603V128.244V116.221V100.191L74.8846 89.5038L72.3462 82.8244L64.7308 81.4885ZM26.6538 102.863C31.3077 101.527 40.8692 98.5878 41.8846 97.5191L45.6923 101.527L52.0385 106.87L58.3846 110.878V116.221L30.4615 125.573L27.9231 137.595L26.6538 152.29L24.1154 165.649L21.5769 169.656L16.5 175H10.1538L3.80769 168.321L6.34615 146.947L10.1538 116.221L15.2308 109.542L26.6538 102.863Z" fill="black"/>
    </svg>`,
  },
  {
    name: "zvezda",
    svg: `<svg width="145" height="190" viewBox="0 0 145 190" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
  <path style="fill: green" fill-rule="evenodd" clip-rule="evenodd" d="M73 30C81.8366 30 89 23.2843 89 15C89 6.7157 81.8366 0 73 0C64.1634 0 57 6.7157 57 15C57 23.2843 64.1634 30 73 30ZM61.5 35.5H72H84.5L89.5 39.5L91.5 44V48.5V112.5L98 135L104.5 156L109 172L110.5 182V187L107.5 190H101.5L97 186L93 175.5L83.5 142L75 117.5H69.5V119L68 126L67 135L64.5 143L60.5 163.5L56.5 183.5L55.5 188.5L50.5 190L45 188.5L42.5 182L45 166.5L48 149.5L49 139L50.5 127L53 110V94V64V45.5C53 44.7 53.6667 42.1667 54 41L61.5 35.5ZM93.5 39L95 44.5V50V52.5L141.5 51.5L144.5 48V43L140 40L93.5 39ZM51 40.5L49.5 44V49V51.5L37.5 52.5H22C21.5 52.5 17.875 52.25 14.25 52C10.625 51.75 7 51.5 6.5 51.5C5.7 51.5 3.16666 50.5 2 50C1.33334 49 0 46.7 0 45.5C0 44.3 1.33334 41.6667 2 40.5H5.5H29.5L49.5 39.5H51V40.5Z" fill="black"/>
  </svg>`,
  },
  {
    name: "prikaz",
    svg: `<svg width="122" height="230" viewBox="0 0 122 230" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E style="z-index: 5;">
    <path style="fill: green" fill-rule="evenodd" clip-rule="evenodd" d="M76.641 38.764C89.5985 38.764 100.103 30.0864 100.103 19.382C100.103 8.67763 89.5985 0 76.641 0C63.6836 0 53.1795 8.67763 53.1795 19.382C53.1795 30.0864 63.6836 38.764 76.641 38.764ZM48.4872 11.6293C47.2359 11.6293 43.7949 10.7678 42.2308 10.3371H37.5385L23.4615 18.0899L0 36.1798V43.9326L4.69231 46.5169L15.641 50.3933C17.7265 51.2547 22.2103 53.236 23.4615 54.2697C24.7128 55.3034 33.3675 59.0075 37.5385 60.7304L43.7949 64.6068L50.0513 72.3596L48.4872 222.247L54.7436 228.708L62.5641 230L70.3846 224.831L71.9487 220.955L73.5128 142.135H78.2051L79.7692 224.831L86.0256 228.708L92.2821 230L96.9744 227.416L101.667 223.539L100.103 81.4045L104.795 102.079L109.487 125.337L114.179 126.629L118.872 125.337L122 116.292L120.436 89.1573C119.393 81.4045 117.308 65.6405 117.308 64.6068C117.308 63.5731 114.179 51.2547 112.615 45.2248L104.795 42.6405H32.8462L25.0256 40.0562L26.5897 34.8877L43.7949 24.5506L50.0513 20.6742L51.6154 15.5057L48.4872 11.6293Z" fill="black"/>
    </svg>`,
  },
];

let action = "";

let video;
let poseNet;
let pose;
let skeleton;
let brain;
let state = "waiting";
let targetLabel;
let label;
let icon;

function modelLoaded() {
  console.log("poseNet ready");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  // video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);

  let options = {
    task: "classification",
    debug: true,
  };
  brain = ml5.neuralNetwork(options);
  const modelInfo = {
    model: "model/model.json",
    metadata: "model/model_meta.json",
    weights: "model/model.weights.bin",
  };
  brain.load(modelInfo, brainReady);
}

function brainReady() {
  console.log("Batya zdes");
  classifyPose();
}

function classifyPose() {
  if (pose) {
    let inputs = [];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      inputs.push(x);
      inputs.push(y);
    }

    brain.classify(inputs, gotResult);
  } else {
    setTimeout(classifyPose, 100);
  }
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results[0].label);
  label = results[0].label;
  classifyPose();
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
    if (state === "collecting") {
      let inputs = [];
      for (let i = 0; i < pose.keypoints.length; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        inputs.push(x);
        inputs.push(y);
      }
      let target = [targetLabel];
      brain.addData(inputs, target);
    }
  }
}

const randomListGenerator = () => {
  const { name, svg } = chars[Math.floor(Math.random() * chars.length)];
  action = name;
  icon = svg;
  return action;
};

const draw = () => {
  image(video, 0, 0);
};
