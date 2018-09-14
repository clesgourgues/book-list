const { composeWithJson } = require('graphql-compose-json');

const ApiResponse = {
  kind: 'books#volumes',
  totalItems: 478,
  items:
    [{
      kind: 'books#volume',
      id: 'O59qDwAAQBAJ',
      etag: 'TzMHedB1Hzs',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/O59qDwAAQBAJ',
      volumeInfo:
      {
        title: 'Undefined',
        authors: ['Jessica Ruddick'],
        publisher: 'Jessica Ruddick Books, LLC',
        publishedDate: '2018-10-22',
        description: 'The truth about her past may define her future. Sophie loves being an elemental. Being able to bend the natural world to her will is thrilling, even if the need for secrecy is putting a cramp in her dating life. Lately, though, her powers have been growing, making it difficult to resist the heady temptation to use her gifts. Trying to balance the elemental world with having a normal life is tough enough without her overbearing, way-too-perfect, and way-too-good-looking guardian Aidan watching—and judging—her every move. The trouble is she’s not sure where she fits in and she’s sure as heck not ready to conform to stringent elemental rules. But when secrets about her life are revealed and outside forces threaten everything Sophie holds dear, she must embrace who she is or risk losing it all.',
        industryIdentifiers:
          [{ type: 'ISBN_13', identifier: '9781946164087' },
          { type: 'ISBN_10', identifier: '1946164089' }],
        readingModes: { text: true, image: true },
        printType: 'BOOK',
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.1.1.0.preview.3',
        panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
        imageLinks:
        {
          smallThumbnail: 'http://books.google.com/books/content?id=O59qDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail: 'http://books.google.com/books/content?id=O59qDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        language: 'en',
        previewLink: 'http://books.google.fr/books?id=O59qDwAAQBAJ&printsec=frontcover&dq=undefined&hl=&cd=1&source=gbs_api',
        infoLink: 'http://books.google.fr/books?id=O59qDwAAQBAJ&dq=undefined&hl=&source=gbs_api',
        canonicalVolumeLink: 'https://books.google.com/books/about/Undefined.html?hl=&id=O59qDwAAQBAJ'
      },
      saleInfo: { country: 'FR', saleability: 'NOT_FOR_SALE', isEbook: false },
      accessInfo:
      {
        country: 'FR',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: { isAvailable: true },
        pdf: { isAvailable: true },
        webReaderLink: 'http://play.google.com/books/reader?id=O59qDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false
      },
      searchInfo:
        { textSnippet: 'The truth about her past may define her future.' }
    },
    {
      kind: 'books#volume',
      id: '0W2eAAAAQBAJ',
      etag: 'l6cila3ezyY',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/0W2eAAAAQBAJ',
      volumeInfo:
      {
        title: 'Adobe Flash. Создание аркад, головоломок и других игр с помощью ActionScript',
        authors: ['Гэри Розенцвейг'],
        publisher: 'Litres',
        publishedDate: '2018-07-11',
        description: 'Данная книга посвящена программированию игр с помощью ActionScript. Здесь вы найдете подробные указания, необходимые для создания самых разных игр – аркад, головоломок, загадок и даже игровых автоматов. В тексте приведены исходные коды программ и детальные, доступно изложенные инструкции. Базовые принципы программирования ActionScript рассматриваются на примере игр, однако вы без труда сможете применить полученные знания и для разработки неигровых проектов, таких как Web-дизайн и реклама. Рекомендации Гэри Розенцвейга помогут вам не только придумывать занимательные игры и размещать их на Web-сайте, но и оптимизировать скорость их работы, а также защищать свои творения от несанкционированного копирования. Представленный в книге код несложно изменить для использования в других программах.Книга предназначена для широкого круга читателей – создателей анимационных роликов, художников-оформителей, программистов и разработчиков Web-сайтов. Издание может также выступать в качестве практического пособия по изучению ActionScript.',
        industryIdentifiers:
          [{ type: 'ISBN_13', identifier: '9785425026460' },
          { type: 'ISBN_10', identifier: '5425026463' }],
        readingModes: { text: true, image: true },
        pageCount: 5835,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '2.4.4.0.preview.3',
        panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
        imageLinks:
        {
          smallThumbnail: 'http://books.google.com/books/content?id=0W2eAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail: 'http://books.google.com/books/content?id=0W2eAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        language: 'ru',
        previewLink: 'http://books.google.fr/books?id=0W2eAAAAQBAJ&pg=PA462&dq=undefined&hl=&cd=2&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=0W2eAAAAQBAJ&source=gbs_api',
        canonicalVolumeLink: 'https://market.android.com/details?id=book-0W2eAAAAQBAJ'
      },
      saleInfo:
      {
        country: 'FR',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: { amount: 5.26, currencyCode: 'EUR' },
        retailPrice: { amount: 5, currencyCode: 'EUR' },
        buyLink: 'https://play.google.com/store/books/details?id=0W2eAAAAQBAJ&rdid=book-0W2eAAAAQBAJ&rdot=1&source=gbs_api',
        offers:
          [{
            finskyOfferType: 1,
            listPrice: { amountInMicros: 5260000, currencyCode: 'EUR' },
            retailPrice: { amountInMicros: 5000000, currencyCode: 'EUR' },
            giftable: true
          }]
      },
      accessInfo:
      {
        country: 'FR',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub:
        {
          isAvailable: true,
          acsTokenLink: 'http://books.google.fr/books/download/Adobe_Flash_%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B0%D1%80%D0%BA%D0%B0%D0%B4-sample-epub.acsm?id=0W2eAAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        pdf:
        {
          isAvailable: true,
          acsTokenLink: 'http://books.google.fr/books/download/Adobe_Flash_%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B0%D1%80%D0%BA%D0%B0%D0%B4-sample-pdf.acsm?id=0W2eAAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        webReaderLink: 'http://play.google.com/books/reader?id=0W2eAAAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false
      },
      searchInfo:
        { textSnippet: 'onMouseDown = function() { var card = <b>undefined</b>; б8-- // Смотрим, был ли <br>\nщелчок по одной из карт пирамиды. for (var i=27; i&gt;=0; i ——) { if ( root (&quot;card&quot;+i<br>\n).hitTest( xmouse, уmouse)) { var card = root (&quot;card&quot;+i); break; } б9-- // Если был,<br>\n&nbsp;...' }
    },
    ]
}


const CustomBookTC = composeWithJson('CustomBook', ApiResponse);
const CustomBookGraphQLType = CustomBookTC.getType();

module.exports = {
  CustomBookTC,
  CustomBookGraphQLType
}