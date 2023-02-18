export const config = {
  MINIO_ENDPOINT: 'localhost:9001',
  MINIO_PORT: 80,
  MINIO_ACCESSKEY: process.env.MINIO_ACCESSKEY,
  MINIO_SECRETKEY: process.env.MINIO_SECRETKEY,
  MINIO_BUCKET: 'cinema',
};
