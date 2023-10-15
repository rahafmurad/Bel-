import { View, Text, FlatList, ActivityIndicator, TouchableOpacity,Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
import ReqTab from '../components/ReqTab';
import styles from '../style/Style';
const EvalRe = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://bymilli.firstcity.ai/api/projects/1/eval';
  const headersConfig = {
    headers: {
      Authorization: 'Bearer Bearer 22|yun0CywF01E7FCxheJX7bA1RzaSH4k0y4Sj5lZIc',
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
      const responseData = response.data;
      const filteredData = await dataFilter(responseData);
      setData(filteredData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  async function dataFilter(RAW_DATA = []) {
    const FILTERS = ['tasks', 'start_job_date', 'end_job_date'];
    let filteredData = [];
    for (let i in RAW_DATA.data) {
      let d = RAW_DATA.data[i];
      console.log('data:', d);
      d.versions.forEach((version, version_index) => {
        console.log('version:', version);
        let versionAnswers = [];
        version.answers.forEach((answer) => {
          console.log('answer:', answer);
          const CODE = d.code;
          const answerContent = answer.answer_content;
          const formQuestion = answer.form_question.question;
          const formQuestionContent = formQuestion.question_content;

          if (FILTERS.includes(formQuestionContent)) {
            versionAnswers.push({ version_index, code: CODE, answerContent, formQuestion });
          }
        });
        filteredData.push(versionAnswers);
      });
    }
    return [
      { rate: 'A', code: 'SNA#01', Task: 'elevation...', startjobdate: '2023/1/1', endjobdate: '2023/9/9' },
      { rate: 'B', code: 'SNA#04', Task: 'change wallpaper...', startjobdate: '2023/1/7', endjobdate: '2023/9/1' },
      { rate: 'C', code: 'SNA#02', Task: 'new floor...', startjobdate: '2023/1/10', endjobdate: '2023/1/1' },
      { rate: 'D', code: 'SNA#03', Task: 'light installation', startjobdate: '2023/1/3', endjobdate: '2023/9/10' },
      { rate: 'A', code: 'SNA#08', Task: 'elevation...', startjobdate: '2023/1/1', endjobdate: '2023/9/9' },
      { rate: 'B', code: 'SNA#07', Task: 'change wallpaper...', startjobdate: '2023/1/7', endjobdate: '2023/9/1' },
      { rate: 'C', code: 'SNA#05', Task: 'new floor...', startjobdate: '2023/1/10', endjobdate: '2023/1/1' },
      { rate: 'D', code: 'SNA#06', Task: 'light installation', startjobdate: '2023/1/3', endjobdate: '2023/9/10' }
    ];
  }

  function flatL({ data, rate }) {
    return (
      <FlatList
        horizontal
        data={data}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => {
          if (item.rate === rate) {
            return (
              <ReqTab
                orderNumber={item.code}
                Task={item.Task}
                startDate={item.startjobdate}
                subDate={item.endjobdate}
              />
            );
          }
          return null;
        }}
      />
    );
  }
  const head = () => {
    return (
      <View style={{ width: '100%' }}>
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

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: '5%', alignItems: 'center' }}>
        {head()}
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => {
              const rate = item.rate;
              return (
                <View>
                  <Text style={styles.rateheader}>{item.rate}</Text>
                  {flatL({ data, rate })}
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default EvalRe;