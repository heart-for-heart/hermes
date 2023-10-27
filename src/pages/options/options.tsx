import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'

import {
  HuiForm,
  HuiInput,
  useForm,
  HuiRadio,
  HuiImage,
  HuiButton
} from 'hui-design'

import { BUSINESS_DISTRICT, CATEGORY, PRICE, STYLE } from './contants'
import './options.scss'

const HuiFormItem = HuiForm.Item
const ThemeColor = '#E34900'
const AvatarImg = 'https://r.kezaihui.com/client/2023-10-27/image/20231027-105307.jpeg'

interface Option {
  /** 商圈 */
  district: string
  /** 分类 */
  category: string
  /** 风格 */
  style: string
  /** 价格 */
  price: string
  /** 特色菜 */
  dishes: string
}

const RadioItem = ({ name, label, options, value, onClick }) => (
  <HuiFormItem
    name={name}
    label={label}
    rule={[
      { require: true }
    ]}
    className='radio-form-item'
  >
    {options.map(item => (
      <HuiRadio
        key={item.value}
        value={item.label}
        size={32}
        color={ThemeColor}
        checked={value === item.label}
        onClick={() => onClick(item.label)}
      >
        {item.label}
      </HuiRadio>
    ))}
  </HuiFormItem>
)

export default function Option() {
  const [form] = useForm()
  const [district, setDistrict] = useState<string>()
  const [category, setCategory] = useState<string>()
  const [style, setStyle] = useState<string>()
  const [price, setPrice] = useState<string>()
  const [dishes, setDishes] = useState<string>()
  const [bussiness, setBussiness] = useState<string>('叨叨火锅')

  const handleNext = () => {
    const options = {
      bussiness,
      dishes,
      district,
      category,
      style,
      price,
    }
    const optionsJSON = JSON.stringify(options)
    Taro.setStorage({
      key: 'option',
      data: optionsJSON,
    })
    
    Taro.navigateTo({
      url: '/pages/ChatRoom/index'
    })
  }

  return (
    <View className='option'>
      <View className='option-header'>
        <Text className='avatar-text'>请告诉我您的店铺的基本信息吧～</Text>
        <HuiImage src={AvatarImg} className='avatar-img' />
      </View>

      <HuiForm form={form}>
        <HuiFormItem
          name='bussiness'
          label='商户名称'
          rule={[
            { require: true }
          ]}
        >
          <HuiInput
            placeholder='请输入商户名称'
            value={bussiness}
            style={{ width: 230, background: 'transparent' }}
            // eslint-disable-next-line
            // @ts-ignore
            onInput={e => setBussiness(e.target.value)}
          />
        </HuiFormItem>
        <RadioItem
          name='district'
          label='城市商圈'
          value={district}
          options={BUSINESS_DISTRICT}
          onClick={value => setDistrict(value)}
        />
        <RadioItem
          name='category'
          label='品类'
          value={category}
          options={CATEGORY}
          onClick={value => setCategory(value)}
        />
        <RadioItem
          name='style'
          label='装修风格'
          value={style}
          options={STYLE}
          onClick={value => setStyle(value)}
        />
        <RadioItem
          name='price'
          label='价格'
          value={price}
          options={PRICE}
          onClick={value => setPrice(value)}
        />
        <HuiFormItem
          name='dishes'
          label='特色菜'
          rule={[
            { require: true }
          ]}
        >
          <HuiInput
            placeholder='请输入三个特色菜'
            value={dishes}
            style={{ width: 230, background: 'transparent' }}
            // eslint-disable-next-line
            // @ts-ignore
            onInput={e => setDishes(e.target.value)}
          />
        </HuiFormItem>
      </HuiForm>
      <View className='next-page'>
        <HuiButton
          onClick={handleNext}
          style={{ background: ThemeColor }}
          radiusType='square'
        >
          继续
        </HuiButton>
      </View>
    </View>
  )
}
