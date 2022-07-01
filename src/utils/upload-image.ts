export function uploadImage(image: File) {
  const formData = new FormData()
  formData.append('fileUpload', image)

  return fetch(process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT_UPLOAD, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      return {
        id: result.id,
        url: result.url,
      }
    })
    .catch((error) => {
      return error
    })
}
