
// Describes the shape of the data from the submitted form(patch/post)
export interface PostData {
  [key: string]: string
}

// The type after using Object.fromEntries
export type ObjFromEntries = {
  [k: string]: FormDataEntryValue
}

// Describes the error object when attempting to log in
export type LoginError = {
  login_error?: string,
  register_error?: string
}