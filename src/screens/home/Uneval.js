import { View, Text, StatusBar, FlatList, ActivityIndicator,TouchableOpacity,Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
import ReqTab from '../components/ReqTab';
import styles from '../style/Style';
const Uneval = () => {
  StatusBar.setHidden(true);
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://bymilli.firstcity.ai/api/projects/1/uneval';
  const headersConfig = {
    headers: {
      Authorization: 'Bearer 22|yun0CywF01E7FCxheJX7bA1RzaSH4k0y4Sj5lZIc',
      Accept: '/',
    },
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url, headersConfig);
      const responseData = response.data.data;
      // const filtered_data = await data_filter(responseData);
      setData(responseData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const head = () => {
    return (
      <View style={{ width: '100%', paddingBottom:10 }}>
          <Text style={[styles.headtitle, { fontSize: 25 }, { marginHorizontal: '10%' }, { marginTop: '6%' }]}>
          Requests
          </Text>
          <TouchableOpacity style={{ height: 30, width: 30, marginTop: '10%' }}>
            <Image source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
              style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
      </View>
    );
  };
  // async function data_filter(RAW_DATA = []) {

  //   const FILTERS = ['tasks', 'start_job_date', 'end_job_date']

  //   let filtered_data = []

  //   for (let i in RAW_DATA.data) {
  //     let d = RAW_DATA.data[i]
  //     console.log('data:', d);
  //     d.versions.forEach((version, version_index) => {
  //       console.log('version:', version);
  //       let version_answers = []
  //       version.answers.forEach((answer) => {
  //         console.log('answer:', answer);
  //         const CODE = d.code
  //         const answer_content = answer.answer_content
  //         const form_question = answer.form_question.question
  //         const form_question_content = form_question.question_content

  //         if (FILTERS.includes(form_question_content)) {
  //           version_answers.push({ version_index, code: CODE, answer_content, form_question })
  //         }
  //       })
  //       filtered_data.push(version_answers)
  //     })
  //   }
  //   // return filtered_data.filter(list => list.length)
  //   return [
  //     { code: 'code', Task: 'elevation...', startjobdate: '2023/1/1', endjobdate: '2023/9/9', },
  //     { code: 'code2', Task: 'installation...', startjobdate: '2023/1/7', endjobdate: '2023/9/1', }
  //   ]
  // }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: '5%', alignItems: 'center' }}>
        {head()}
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) =>
              <ReqTab
                orderNumber={item.code}
                Task={item.task}
                startDate={item.start_job_date}
                subDate={item.end_job_date}
              />
            }
          />
        )}
      </View>
    </View>
  );
};

export default Uneval;