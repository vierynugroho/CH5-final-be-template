sesuai db diagram, terdapat 4 resources dalam sistem kita : user, auth, product dan shop.

1. buat rest API crud setiap resource, kecuali auth
2. di auth api terdapat 3 API : register, login dan checktoken. API checktoken memberikan response api data user pemilik token
3. ASSOCIATE antar models sesuai database diagram nya
4. PELAJARI SENDIRI SEEDER di SEQUELIZE, lakukan seeder untuk user ROLE owner sebanyak 5 user
5. buat middleware baru dengan logic kalian, middleware check apakah user pemilik shop (checkOwnership), kunci nya userId pada Shops table
6. API untuk : create, update dan delete shop hanya bisa diakses oleh owner
7. API untuk : update dan delete product hanya bisa dilakukan oleh owner pemilik toko, gunakan middleware checkOwnership
8. API untuk : create hanya bisa dilakukan oleh user yang mempunyai relasi dengan toko nya, gunakan middleware checkOwnership
9. setiap API untuk get data INCLUDE models yang mempunyai relasi, berikan di data pada response API nya
10. buat validasi di setiap API

![My Image](/public/img/db-diagram.png)
