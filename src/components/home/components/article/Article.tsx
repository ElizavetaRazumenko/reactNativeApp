import React from 'react';
import { View, Text, Image } from 'react-native';
import { ArticleData } from './types';

type Props = { data: ArticleData };

export const Article: React.FC<Props> = ({ data }) => 
  <View className="mb-5 bg-white shadow-lg">
    <View className="container px-[15px] py-5">
      <View className="flex flex-row justify-between items-center mb-5">
        <View className="bg-pink rounded">
          <Text className="py-1 px-2 text-base text-white font-openSans">
            {data.category}
          </Text>
        </View>
        <Text className="text-sm font-openSans">{data.date}</Text>
      </View>
      <Text className="mb-5 text-xl font-openSans font-bold">{data.title}</Text>
      <Text className="text-base font-openSans">{data.content}</Text>
    </View>
    <Image source={data.pictureUrl} className="w-full h-auto" />
  </View>