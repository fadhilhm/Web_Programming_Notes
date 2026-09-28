# Display Value

## 1. Out flow and In flow

Penempatan objek/elemen dalam halaman 

1. Out flow: Mengatur penempatan diri sendiri (e.g. `block`, `inline`, dan `inline-block`)
2. In flow: Mengatur penempatan anaknya juga (e.g. `flex` dan `grid`)
3. Both: Mempunyai kedua sifat (e.g. `inline flex`)

## 2. Flex Box

Cara yang memudahkan dev untuk membuat penempatan objek yang kompleks. <br>
Gunakan saat membuat layout yang kecil, layout yang lebih besar gunakan `grid`. <br>
Aturan pada flexbox juga mengatur anaknya.

### <u>Properties</u>

#### 1. flex-direction

Menentukan arah dari main axis. (defaults to `row`) <br>
1. `row`: left to right
2. `row-reverse`: right to left
3. `column`: top to bottom
4. `column-reverse`: bottom to top

#### 2. flex-wrap

Menentukan apakah elemen perlu dibungkus ke baris baru disaat ruang tidak cukup (defaults to `nowrap`)
1. `nowrap`: elemen terus lanjut bahkan jika melebihi akhir
2. `wrap`: elemen akan diwrap agar saat memenuhi sampai akhir akan pindah secara top to bottom 
3. `wrap-reverse`: elemen akan diwrap agar saat memenuhi sampai akhir akan pindah secara bottom to top 

#### 3. justify-content

Menentukan posisi elemen sepanjang main axis. (defaults to `flex-start`)
1. `flex-start`: elemen disimpan dari awal container
2. `flex-end`: elemen disimpan dari akhir container
3. `center`: elemen disimpan di tengah horizontal
4. `space-evenly`: jarak antar-elemen dibagi rata
5. `space-between`: jarak antar-elemen dibagi rata, tetapi elemen pertama dan akhir di ujung container
6. `space-around`: jarak antar-elemen dibagi rata, tetapi elemen pertama dan akhir ada gap yang sama di ujung container

#### 4. gap

Memberikan sebuah memberi space kosong antar elemen-elemen. <br>
Mengikuti main axis.
- `gap: {n}`, {n} = space kosong antar elemen pada horizontal dan vertikal sebesar n
- `row-gap: {n}`, {n} = space kosong pada vertikal sebesar n
- `column-gap: {n}`, {n} = space kosong pada horizontal sebesar n

#### 5. align-items

Menentukan posisi elemen sepanjang cross axis. (defaults to `stretch`)
1. `stretch`: elemen akan dipanjangkan ke bawah untuk memenuhi tinggi container
2. `flex-start`: elemen disimpan dari awal container
3. `flex-end`: elemen disimpan dari akhir container
4. `center`: elemen disimpan di tengah vertical
5. `baseline`: elemen disejajarkan berdasarkan *baseline* di dalam elemen

#### 6. align-content

Mengatur jarak antar baris sepanjang container. (defaults to `stretch`) <br>
Perlu menggunakan `flex-wrap: wrap`
1. `stretch`: elemen akan dipanjangkan ke bawah untuk memenuhi tinggi container
2. `flex-start`: elemen disimpan dari atas container
3. `flex-end`: elemen disimpan dari bawah container
4. `center`: elemen disimpan di tengah vertikal
5. `space-evenly`: jarak antar-elemen dibagi rata
6. `space-between`: jarak antar-elemen dibagi rata, tetapi elemen pertama dan akhir berada di ujung container
7. `space-around`: jarak antar-elemen dibagi rata, tetapi elemen pertama dan akhir ada gap yang sama di ujung container

#### 7. order

Menentukan bagaimana elemen diurut. <br>
Disimpan pada anak container
- `order: {n}`, {n} = urutan ke-n

#### 8. flex-grow dan flex-shrink

Menentukan seberapa besar atau kecil element berubah. <br>
- `flex-grow: {n}`, {n} = membesar sebesar n
- `flex-shrink: {n}`, {n} = mengecil sebesar n. Perlu `flex-wrap: nowrap`

## 3. Grid

### <u>Terminologi</u>

#### 1. Grid Container

#### 2. Grid Item

#### 3. Grid Line

#### 4. Grid Track

#### 5. Grid Cell

#### 6. Grid Area

### <u>Properties</u>

#### 1. Grid Templates

Menentukan struktur row, column, dan area pada grid container. <br>
Terdapat satuan `fr` yang membagi ruang kosong tersisa secara rata tergantung tipenya. <br>
column secara horizontal dan row secara vertical
- `grid-template-columns: {n} {m} {i} {j} ...`, {n, m, i, j, ...} = membuat x column, dengan masing-masing column memiliki ukuran n, m, i, j, dan ... sendiri
- `grid-template-rows: {n} {m} {i} {j} ...`, {n, m, i, j, ...} = membuat x row, dengan masing-masing row memiliki ukuran n, m, i, j, dan ... sendiri
- `grid-template-rows: repeat(4, {n} fr)`, contoh untuk mengulang pembagian row dengan ukuran yang sama
- `grid-template-areas:` menetukan layout untuk teks 