const prependWithPublicUrl = (url) => process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/${url}` : url

export default prependWithPublicUrl
