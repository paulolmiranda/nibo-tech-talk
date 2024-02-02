import { Product } from './product/product';
import { Client } from './client/client';

export const clients = [
  new Client('fcf90c6b-9201-4508-8d92-c2d2c5fc5200', 'Fabiula Torres', 10000),
  new Client('b8b4fe03-60d4-45c7-aade-4a74a52e70e8', 'Josenice Mendes', 5000),
  new Client('3509d6bb-18e0-4c95-bf44-745344f82cab', 'Jussana Valéria de Souza Silva', 6000),
  new Client('33cfc678-d04a-4cc0-bda4-a502d26e4ae8', 'Celso Garcia Oliveira', 1000),
  new Client('919242f1-d988-439e-8e68-15ff21955275', 'Paola Pereira dos Santos', 15000),
  new Client('df137082-8ad4-402b-8cde-7da9d7ef6851', 'Josenice Mendes', 5000),
  new Client('679ef929-990f-4550-87c7-07bd1d5ed03b', 'Manuelita Falcão Brito', 4000),
  new Client('58c567c6-6f96-4dc1-8ddb-79cb0bc6fbfb', 'Thais Rodrigues Zanoni', 2000),
  new Client('a2f789ba-5cd5-4c6b-9615-129b614d712a', 'Kate Dayana', 1000),
  new Client('55018484-179d-4616-ab25-1f969d48021c', 'Josenice Francisca Conceição Mendes', 500),
  new Client('0f5564cb-4e79-4a17-80e7-9e0dc8b4716f', 'Priscilla Queiroz Palombo', 2500),
  new Client('7eafd9b1-3e24-4b9e-ad74-b4276cbeff9b', 'Paulo Victor Campagnola Franca', 3000),
  new Client('7837a7e1-dd0d-4075-9b14-e9b35ef9501b', 'Eduardo De Lima Cunha', 2000),
  new Client('b2300f33-891c-461f-a0ee-c951debdc699', 'Ipolita Lina De Paula', 1000),
  new Client('35bf3944-f879-4e7b-b341-2001dbe3c65a', 'Luciane Miranda Faria', 1000),
  new Client('33913af0-30e7-4d27-a182-4bcd99af08b4', 'Jose Marcos Dos Santos', 250),
  new Client('77108c9b-39ee-4e26-a1ac-d1a8f95eb79d', 'Carlos Alberto Cardoso', 10000),
  new Client('2b5296c2-5990-40ac-b54a-53b99fc6db55', 'Marcio Rogerio Lopes De Albuquerque', 15000),
  new Client('44f93f9b-d392-4590-bf9d-215764496e19', 'Lilian Ferreira Silva Ferraz', 5000),
  new Client('2cfca0ae-b606-4e57-a149-cfb6f1a99d40', 'Rogerio Goncalves Lopes', 2000),
  new Client('4da08249-6fec-4797-ac21-0814a88295b3', 'Edileuza Da Cruz Macaneiro', 10000),
  new Client('b0cacd37-4481-4ed9-a9e1-66af0069b41d', 'Raquel Goncalves Dos Reis', 10000),
  new Client('95090cf3-6278-481e-8859-1276b57eeb77', 'Sonia Ramos Dos Santos', 5000),
  new Client('2e4ba7e5-1e3b-47d1-afeb-0e0fa7376f68', 'Rosani Da Rocha Lima', 10000),
  new Client('e1478f67-2a52-4560-8237-cfc0416445a6', 'Patricia Dauhali Clemente Guimaraes Pereira', 5000),
  new Client('4b5fdafa-26c2-417e-ae48-9d3f9b50ce42', 'Gedson Cardoso Kempe', 10000),
  new Client('3ca7c59d-cd09-47d2-85a0-a426d2f06df5', 'Raquel Goncalves Dos Reis', 5000),
  new Client('1cac02b2-9d51-4f40-8237-173fd4fef68b', 'Luceni Da Silva Oliveira', 10000),
  new Client('d1727bd2-8449-4133-880e-62a7583fcb06', 'Marilda Da Silva Rudnick', 10000),
  new Client('171b2844-f5cb-49f7-92b0-962af56328bf', 'Eudes Arrais Gois', 5000),
];

export const products = [
  new Product(
    'e97c432e-b89b-4d7e-8d79-8d17575b7bbf',
    'fcf90c6b-9201-4508-8d92-c2d2c5fc5200',
    'Memória Kingston Fury Renegade Pro, 16GB, 4800MHz, DDR5, ECC Reg CL36, PnP, para Servidor, Preto - KF548R36RB-16',
  ),
  new Product('aad50c70-442a-4e21-916d-0090e46f17b8', 'b8b4fe03-60d4-45c7-aade-4a74a52e70e8', 'Cooler Fan Rise Mode, 120mm, Preto - RM-BK-01-FB'),
  new Product('142d535b-3175-42c7-9261-779c49eac162', '3509d6bb-18e0-4c95-bf44-745344f82cab', 'Fonte MSI MAG A650BN, ATX, 650W, 80 PLUS Bronze, PFC Ativo, Entrada Bivolt, Preto - 306-7ZP2B22-CE0'),
  new Product('92e96474-f9df-48ae-a45a-e5449eead1be', '33cfc678-d04a-4cc0-bda4-a502d26e4ae8', 'SSD 1 TB Kingston NV2, M.2 2280 PCIe, NVMe, Leitura: 3500 MB/s e Gravação: 2100 MB/s - SNV2S/1000G'),
  new Product('c6a37ae6-1a87-48f4-be32-1f9a40b83541', '919242f1-d988-439e-8e68-15ff21955275', 'Pasta Térmica Rise Silver Frost, 5g, Cinza - RM-TG-01-FRT'),
  new Product('197a4227-bb77-4345-88f2-8603e4ffee4a', 'df137082-8ad4-402b-8cde-7da9d7ef6851', 'Cooler Fan Rise Mode Energy, 3 Unidades, 120mm, ARGB, Preto  - FN-02-RGB-5V'),
  new Product('cedac539-5a07-4745-9e26-bd09da29cbc1', '679ef929-990f-4550-87c7-07bd1d5ed03b', 'Memória Rise Mode Z, 8GB, 3200MHz, DDR4, CL16, Preto - RM-D4-8G-3200Z'),
  new Product('73bbaade-5a24-4124-b10b-da1e0d76eb0a', '58c567c6-6f96-4dc1-8ddb-79cb0bc6fbfb', 'SSD 500 GB Kingston NV2, M.2 2280 PCIe, NVMe, Leitura: 3500 MB/s e Gravação: 2100 MB/s - SNV2S/500G'),
  new Product('', 'a2f789ba-5cd5-4c6b-9615-129b614d712a', 'Kate Dayana'),
  new Product('dbabfa22-5c7a-4416-966a-d77d0ef33550', '55018484-179d-4616-ab25-1f969d48021c', 'SSD 128GB KBM! Gaming, SATA III, Leitura 570 MB/s, Gravação 500 MB/s - KGSSD100128'),
  new Product('40d4ddb0-7e62-4b6e-805e-d29b22ec31cf', '0f5564cb-4e79-4a17-80e7-9e0dc8b4716f', 'SSD 128GB KBM! Gaming, SATA III, Leitura 570 MB/s, Gravação 500 MB/s - KGSSD100128'),
  new Product('9c9bb7d3-628e-46a7-80ac-9010d037abec', '7eafd9b1-3e24-4b9e-ad74-b4276cbeff9b', 'Water Cooler Rise Mode Gamer Black, RGB, 240mm, Preto - RM-WCB-02-RGB'),
  new Product('e4a8c2ef-0bb8-4f2d-bbee-9be53c36fd88', '7837a7e1-dd0d-4075-9b14-e9b35ef9501b', 'Placa Mãe Gigabyte B550M Aorus Elite, AMD AM4, Micro ATX, DDR4'),
  new Product('6ce84fd7-79fc-4c1d-8089-85c5adca24fb', 'b2300f33-891c-461f-a0ee-c951debdc699', 'Placa de Vídeo RTX 4060 VENTUS 2x Black OC MSI NVIDIA GeForce, 8GB GDDR6, DLSS, Ray Tracing'),
  new Product('f3ec450f-6672-4e09-b591-b155e2b3cb1d', '35bf3944-f879-4e7b-b341-2001dbe3c65a', 'Placa Mãe Asus TUF GAMING A520M-PLUS II, AMD AM4, mATX, DDR4'),
  new Product('3a88a2a4-08c5-4de6-a258-39e34bcb9ccf', '33913af0-30e7-4d27-a182-4bcd99af08b4', 'Processador AMD Ryzen 5 5600, 3.5GHz (4.4GHz Max Turbo), Cache 35MB, AM4, Sem Vídeo - 100-100000927BOX'),
  new Product('872ba821-4d5b-4f7e-892c-27bb8881efd5', '77108c9b-39ee-4e26-a1ac-d1a8f95eb79d', 'Memória Rise Mode Z, 16GB, 3200MHz, DDR4, CL16, Preto - RM-D4-16G-3200Z'),
  new Product('ab772f81-71aa-4e61-a77f-186857aa2c60', '2b5296c2-5990-40ac-b54a-53b99fc6db55', 'Placa Mãe MSI B560M PRO-E, Intel LGA 1200, mATX, DDR4'),
  new Product('b157cc2c-2e1d-457c-9783-4771b0a690a3', '44f93f9b-d392-4590-bf9d-215764496e19', 'Kit Upgrade Kaikora, Placa-Mãe H81 + Intel I5 4ª Geração + Memória 16GB DDR3'),
  new Product('e38cdd0c-2e94-41e4-82d6-3e7377ca6f1d', '2cfca0ae-b606-4e57-a149-cfb6f1a99d40', 'Kit Upgrade, Placa Mãe H81 + Processador I5 4570  + Memoria 8Gb Ddr3 + Cooler'),
  new Product('fc54df4e-f9b3-49f5-812e-c19bd4e35adf', '4da08249-6fec-4797-ac21-0814a88295b3', 'Kit Upgrade Powerpc: Placa Mãe H61 + Processador I3 3220 + Memória 8GB DDR3 + Cooler'),
  new Product('d5634979-eaad-4b19-bd57-dc1bf654c66a', 'b0cacd37-4481-4ed9-a9e1-66af0069b41d', 'Kit Upgrade - Placa-Mãe H510 Asus + Processador I5-10400F + Memória 16GB DDR4, Dual-channel'),
  new Product('c4be3cbc-7111-402c-8588-3503ec0bfe90', '95090cf3-6278-481e-8859-1276b57eeb77', 'Kit Upgrade Powerpc: Placa Mãe H110 + Processador I5 7400 + Memória 8 GB DDR4 + Cooler'),
  new Product('ad4c5973-3eb6-40d5-9cae-84621a80cb46', '2e4ba7e5-1e3b-47d1-afeb-0e0fa7376f68', 'Fonte MSI MAG A650BN, ATX, 650W, 80 PLUS Bronze, PFC Ativo, Entrada Bivolt, Preto - 306-7ZP2B22-CE0'),
  new Product('5752a56f-7533-43f3-96b7-be188e525fd4', 'e1478f67-2a52-4560-8237-cfc0416445a6', 'Memória Rise Mode Z, 8GB, 3200MHz, DDR4, CL16, Preto - RM-D4-8G-3200Z'),
  new Product('9c7b177f-e921-40e4-9907-b59ed01ddb70', '4b5fdafa-26c2-417e-ae48-9d3f9b50ce42', 'Memória Rise Mode Z, 8GB, 3200MHz, DDR4, CL16, Preto - RM-D4-8G-3200Z'),
  new Product('7a1b9941-b2c1-4390-968f-8f7c7780e960', '3ca7c59d-cd09-47d2-85a0-a426d2f06df5', 'Kit Upgrade Powerpc: Placa Mãe H110 + Processador I5 7400 + Memória 8 GB DDR4 + Cooler'),
  new Product('1b341f86-5801-4238-ae2f-799e121c9137', '1cac02b2-9d51-4f40-8237-173fd4fef68b', 'Memória Rise Mode, 4GB, 1600MHz, DDR3, CL11, para Notebook - RM-D3-4G1600N'),
  new Product('f8d0040f-e196-4133-b851-317434165203', 'd1727bd2-8449-4133-880e-62a7583fcb06', 'Pasta Térmica Rise Mode Silver Cold, 5g, Cinza - RM-TG-01-CLD'),
  new Product(
    'a41feea4-f928-4bfb-b794-fa464ea9ca82',
    '171b2844-f5cb-49f7-92b0-962af56328bf',
    'Processador Intel Core i5-10400F, 2.9GHz (4.3GHz Max Turbo), Cache 12MB, 6 Núcleos, 12 Threads, LGA 1200 - BX8070110400F',
  ),
];