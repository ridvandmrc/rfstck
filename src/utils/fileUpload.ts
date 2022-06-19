import Moralis from 'moralis'
import { Buffer } from 'buffer'
import { MetaDataType } from './models'
export const uploadImage = async (image: File): Promise<string> => {
  const file1 = new Moralis.File((image as any).name, image)
  await file1.saveIPFS() // image saved to monalis
  return file1.url()
}

type UploadMetaDataType = {
  name: string
  imageUrl: string
  amount: string
}

export const uploadMetaData = async (
  { name, imageUrl, amount }: UploadMetaDataType,
  metaData: MetaDataType[] | undefined,
): Promise<string> => {
  const metadata = {
    name: name,
    image: imageUrl,
    attributes: metaData?.reduce(
      (first: any, next) => [
        ...first,
        { trait_type: next.key, value: next.value },
      ],
      [],
    ),
    amount: amount,
  }

  const file2 = new Moralis.File(`${name}-metadata.json`, {
    base64: Buffer.from(JSON.stringify(metadata)).toString('base64'), // create metadata
  })
  await file2.saveIPFS()
  return file2.url()
}
