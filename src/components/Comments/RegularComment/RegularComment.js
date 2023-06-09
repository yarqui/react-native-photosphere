import { View, Image, Text } from "react-native";
import { CommentsStyles } from "../CommentsStyles";

export const RegularComment = ({ comment }) => {
  return (
    <View style={CommentsStyles.commentsContainer}>
      <View style={CommentsStyles.commentWrap}>
        {comment.photo ? (
          <Image
            style={CommentsStyles.commentatorAvatar}
            source={{ uri: comment.photo }}
          />
        ) : (
          <Image
            style={CommentsStyles.commentatorAvatar}
            source={require("../../../images/defaultCommentator.png")}
          />
        )}

        <View style={CommentsStyles.textWrap}>
          <Text style={CommentsStyles.text}>{comment.commentTxt}</Text>
          <Text style={CommentsStyles.textTime}>{comment.commentDate}</Text>
        </View>
      </View>
    </View>
  );
};

export default RegularComment;
