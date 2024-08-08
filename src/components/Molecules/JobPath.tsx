import React from "react";
import { View, Text } from "react-native";
import Svg, { Path, Circle, G } from "react-native-svg";

export default function JobPath({jobPath}) {
  const width = 250;
  const height = 300;

  return (
    <View className="my-20">
      <Svg height={height} width={width}>
        <Path
          d={`M 20 ${height - 20} C ${width / 2}, ${height / 4} ${width / 2}, ${
            (height * 3) / 4
          } ${width - 20}, 20`}
          stroke="#6078B8"
          strokeWidth="3"
          strokeDasharray="3, 3"
          fill="none"
        />

        {jobPath.map((job, index) => {
          const x = (width / jobPath.length) * (index + 0.5);
          const y = height - (index + 1) * (height / jobPath.length) - 20;

          return (
            <G key={index}>
              <Circle cx={x} cy={y} r={10} fill="#FBB110" />
              <Text style={{ position: "absolute", left: x + 15, top: y - 10 }}>
                {job}
              </Text>
            </G>
          );
        })}
      </Svg>
    </View>
  );
}
