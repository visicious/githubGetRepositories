import { StyleSheet,Dimensions } from 'react-native';

import { gitRepositoriesHeaderHeight, gitContributorImageHeight, gitContributorImageWidth } from '../constants/constants';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1
  },
  gitRepositoriesHeader: {
    width: Dimensions.get('window').width,
    height: gitRepositoriesHeaderHeight,
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 30
  },
  gitRepositoriesTitle: {
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 25,
    color: 'black'
  },
  gitRepositoriesSearchBarContainer: {
    backgroundColor: 'white'
  },
  gitRepositoriesElementsContainerWrapper: {
    height: (Dimensions.get('window').height) - gitRepositoriesHeaderHeight,
    width: '100%'
  },
  gitRepositoriesElementsContainer: {
    width: Dimensions.get('window').width
  },
  gitRepositoryElement: {
    width: Dimensions.get('window').width,
    padding: 16,
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  gitRepositoryDetails: {
    paddingBottom: 7,
    flexDirection: 'row',
    width: '100%'
  },
  gitRepositoryName: {
    textAlign: 'left',
    width: '50%',
  },
  gitRepositoryPRCount: {
    paddingTop: 7,
    width: '50%'
  },
  gitRepositoryNameText: {
    textAlign: 'left',
    fontSize: 20,
  },
  gitRepositoryPRCountText: {
    fontSize: 12.8
  },
  gitRepositoryDescription: {
    fontSize: 12.8
  },
  gitContributorElement: {
    width: Dimensions.get('window').width,
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    padding: 16
  },
  gitContributorAvatarWrapper: {
    width: gitContributorImageWidth,
    height: gitContributorImageHeight,
  },
  gitContributorAvatar: {
    borderRadius: gitContributorImageHeight/2,
    borderWidth: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  gitContributorDetails: {
    width: Dimensions.get('window').width - gitContributorImageWidth,
    paddingLeft: 15
  },
  gitContributorTitle: {
    fontSize: 20
  },
  gitContributorDetail: {
    fontSize: 16
  },
  activityIndicatorContainer: {
    justifyContent: 'center', 
    position: 'absolute',
    flex: 1,
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  },
  gitSearchResultsContainer: {
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.5,
    top: gitRepositoriesHeaderHeight - 16,
    left: 0,
  },
  gitSearchUsersResultContainerWrapper: {
    borderColor: '#eaeaea',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: '100%'
  },
  gitSearchUsersResultContainer: {
    backgroundColor: 'rgba(256,256,256, 1.0)',
    width: '100%',
  },
  gitUserElement: {
    backgroundColor: 'rgba(256,256,256, 1.0)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dadada',
    width: '100%',
    paddingLeft: 7,
    height: 50
  },
  gitUserElementLogin: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold'
  },
  gitUserElementName: {
    width: '100%',
    fontSize: 15
  },
});