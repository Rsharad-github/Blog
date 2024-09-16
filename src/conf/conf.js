const conf = {
  appwriteUrl: String(import.meta.env.VITE_appwrite_url),
  appwriteProjectId: String(import.meta.env.VITE_appwrite_project_id),
  appwriteDatabaseId: String(import.meta.env.VITE_appwrite_database_id),
  appwriteCollectionId: String(import.meta.env.VITE_appwrite_collection_id),
  appwriteBucketId: String(import.meta.env.VITE_appwrit_bucket_id),
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf