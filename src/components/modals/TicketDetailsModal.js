import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomsheetModal from '../template/BottomSheetModal';
import MText from '../template/MText';
import Cross from '../../assets/svgs/cross.svg';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const TicketDetailsModal = ({ visible, onHide, data }) => {
  const navigation = useNavigation();

  const onHideAction = () => {
    onHide();
  };

  const renderRow = (label, value) => (
    <View style={styles.detailRow}>
      <View style={styles.detailLabelWrapper}>
        <MText
          title={label}
          color={colors.SEMI_GREEN}
          fontWeight="500"
          size={12}
          style={styles.contentName}
        />
      </View>
      <View style={styles.colonWrapper}>
        <MText
          title=":"
          color={colors.SEMI_GREEN}
          fontWeight="500"
          size={12}
          style={styles.contentName}
        />
      </View>
      <View style={styles.detailValueWrapper}>
        <MText
          title={value || '-'}
          color={colors.BLACK}
          fontWeight="500"
          size={12}
          style={styles.contentValue}
        />
      </View>
    </View>
  );

  const renderColumn = (label, value) => (
    <View style={styles.column}>
        <View style={styles.detailLabelWrapper}>
        <MText
          title={label}
          color={colors.SEMI_GREEN}
          fontWeight="500"
          size={12}
          style={styles.contentName}
        />
      </View>
      <View style={styles.detailValueWrapper}>
        <MText
          title={value || '-'}
          color={colors.BLACK}
          fontWeight="500"
          size={12}
          style={styles.contentValue}
        />
      </View>
    </View>
  )

  return (
    <BottomsheetModal
      visible={visible}
      onHide={onHideAction}
      onBackPress={onHideAction}
      scrollEnabled={false}
      keyboardShouldPersistTaps="never"
      isNotchVisible
    >
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <MText
            title="Ticket Details"
            lineHeight="100%"
            color={colors.BLUE}
            fontWeight="600"
            size={16}
            style={styles.header}
          />
          <MText
            title={data.tStatus}
            style={styles.status}
          />
        </View>

        <View style={styles.contentContainer}>
          {renderRow('Ticket Number', data.tNumber)}
          {renderRow('Raised Date', data.tRaisedDate)}
          {renderRow('Priority', data.tPriority)}
          {renderRow('Closed By', data.tClosedBy)}
          {renderColumn('Title/Summary:',data.tSummary)}
          {renderColumn('Comments:',data.comment)}
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Pressable onPress={onHideAction} style={styles.footerPressable}>
          <MText
            title="Cancel"
            lineHeight="100%"
            color={colors.RED}
            fontWeight="500"
            size={14}
            style={styles.cta}
          />
          <Cross />
        </Pressable>
      </View>
    </BottomsheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE_COLOR,
    margin: 10,
    padding: 20,
    borderRadius: 25,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontFamily: fonts.REGULAR,
    fontSize: 16,
    fontWeight: '600',
  },
  status: {
    fontFamily: fonts.REGULAR,
    fontSize: 12,
    fontWeight: '600',
    color: colors.GREEN,
    backgroundColor: colors.LIGHT_GREEN,
    padding: 5,
    borderRadius: 15,
  },
  contentContainer: {
    paddingTop: 20,
  },
  detailRow: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  detailLabelWrapper: {
    flex: 0.5,
  },
  colonWrapper: {
    flex: 0.3,
  },
  detailValueWrapper: {
    flex: 0.5,
  },
  contentName: {
    fontFamily: fonts.REGULAR,
    fontSize: 12,
  },
  contentValue: {
    fontFamily: fonts.REGULAR,
    fontSize: 12,
  },
  footerContainer: {
    backgroundColor: colors.WHITE_COLOR,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 25,
  },
  footerPressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cta: {
    fontFamily: fonts.REGULAR,
    color: colors.RED,
    fontSize: 14,
    fontWeight: '600',
  },
    column: {
        flexDirection: 'column',
        paddingTop: 20,
    },
});

export default TicketDetailsModal;
