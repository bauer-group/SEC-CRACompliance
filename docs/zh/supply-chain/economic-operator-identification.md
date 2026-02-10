# 经济运营者识别 (Identification of Economic Operators)（Art. 21）

## 概述

Art. 21 CRA 要求所有经济运营者 (Economic Operators) 能够识别其在供应链中的供应商和客户。该信息须应市场监管机构 (Market Surveillance Authorities) 的要求予以提供。其目标是确保含数字元素的产品 (Products with Digital Elements) 在整个供应链中的完全可追溯性。

::: info 法律依据
**Art. 21 CRA:** *"Economic operators shall, on request, identify the following to the market surveillance authorities:*

- *any economic operator who has supplied them with a product;*
- *any economic operator to whom they have supplied a product.*

*Economic operators shall be able to present this information for a period of **10 years** after they have been supplied with the product and for 10 years after they have supplied the product."*
:::

## 受影响的经济运营者

识别义务适用于供应链中的所有角色：

| 经济运营者 | 识别义务 | 引用 |
|-----------|----------|------|
| 制造商 (Manufacturer) | 客户（进口商、分销商） | Art. 10, Art. 21 |
| 进口商 (Importer) | 制造商（供应商）+ 分销商（客户） | Art. 15, Art. 21 |
| 分销商 (Distributor) | 进口商/制造商（供应商）+ 客户 | Art. 17, Art. 21 |
| 授权代表 (Authorised Representative) | 制造商（委托方）+ 客户 | Art. 16, Art. 21 |

## 文档要求

### 最低记录内容

须为每笔 CRA 相关交易维护以下数据：

- 供应商或客户的 **身份信息**（公司名称、地址、联系方式）
- **产品名称**（类型、版本、序列号或唯一标识符）
- 供应或接收的 **日期**
- 所供应产品的 **数量** 和类型

### 保留期限

::: warning 保留义务
所有识别记录必须自供应之日起至少保留 **10 年**，并须应市场监管机构的要求随时可供提供。
:::

## BAUER GROUP 实施方案

### 入库供应（供应商）

| 措施 | 系统 | 状态 |
|------|------|------|
| 供应商主数据 | ERP / 采购系统 | ✅ |
| 带产品分配的收货记录 | ERP | ✅ |
| 采购文件归档 | DMS | ✅ |
| 保留期限 ≥ 10 年已配置 | DMS / ERP | ⚠️ 待核实 |

### 出库供应（客户）

| 措施 | 系统 | 状态 |
|------|------|------|
| 客户主数据 | ERP / CRM | ✅ |
| 订单处理和交付文件 | ERP | ✅ |
| 销售和分销文件归档 | DMS | ✅ |
| 保留期限 ≥ 10 年已配置 | DMS / ERP | ⚠️ 待核实 |

### 机构请求处理流程

1. 收到市场监管机构的请求
2. 转发至信息安全官 (ISB) 和相关部门
3. 识别受影响的产品和相关交易
4. 从 ERP/DMS 中汇编供应商和客户数据
5. 在规定期限内向机构提交

## 检查清单

- [ ] ERP 中供应商和客户数据的保留期限已验证为 ≥ 10 年
- [ ] DMS 中采购和销售文件的归档策略已更新
- [ ] 针对经济运营者识别的机构请求处理流程已记录
- [ ] 响应 Art. 21 请求的职责已明确
- [ ] 主数据系统中数据质量的定期审查

## 交叉引用

- [供应链安全](/zh/supply-chain/) -- 供应链安全措施概览
- [市场监管](/zh/overview/market-surveillance) -- 与机构的合作及响应流程
- [进口商义务](/zh/overview/importer-obligations) -- 非欧盟供应商的特定义务
- [分销商义务](/zh/overview/distributor-obligations) -- 分销环节的尽职调查义务
