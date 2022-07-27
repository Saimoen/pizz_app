import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url/";
export const client = SanityClient({
    projectId: 'k2upt94p',
    dataset: 'production',
    apiVersion: '2022-07-26',
    useCdn: true,
    token: 
    'skCIuM30gyQrIHjY8CcyKFFYgUbRzDBb9JDNJNgOg9BMdZukpuG0hx9d1HMALDqSR0mwJYISVxnDHvxBVVH04NrEWH5pLuYU16uGZK9jVGzgyZgb1pVOFsDuSU0jo88Dx2hyLEetuL8x8AKJotsob4L8vna4eiDgX6Yhl66NAaix7v3wwUOG'
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)