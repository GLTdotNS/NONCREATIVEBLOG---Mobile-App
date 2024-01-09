import React, { useEffect } from "react";
import { serializers } from "../serializers/serializers";
import BlockContent from "@sanity/block-content-to-react";
import { ScrollView, Text, View } from "react-native";
const BlockContentComponent = ({ post }) => {
  return (
    <ScrollView>
      {" "}
      <View>
        {" "}
        <Text>
          {" "}
          <BlockContent
            blocks={post.body}
            projectId="6kqgsbl2"
            dataset="production"
          />
        </Text>
      </View>
    </ScrollView>
  );
};

export default BlockContentComponent;
