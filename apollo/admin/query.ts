import { gql } from '@apollo/client';

/**************************
 *         MEMBER         *
 *************************/

export const GET_ALL_MEMBERS_BY_ADMIN = gql`
	query GetAllMembersByAdmin($input: MembersInquiry!) {
		getAllMembersByAdmin(input: $input) {
			list {
				_id
				memberType
				memberStatus
				memberAuthType
				memberPhone
				memberNick
				memberFullName
				memberImage
				memberAddress
				memberDesc
				memberWarnings
				memberBlocks
				memberProperties
				memberRank
				memberArticles
				memberPoints
				memberLikes
				memberViews
				deletedAt
				createdAt
				updatedAt
				accessToken
			}
			metaCounter {
				total
			}
		}
	}
`;

/**************************
 *        PROPERTY        *
 *************************/

export const GET_ALL_PROPERTIES_BY_ADMIN = gql`
	query GetAllPropertiesByAdmin($input: AllPropertiesInquiry!) {
		getAllPropertiesByAdmin(input: $input) {
			list {
				_id
				propertyType
				propertyBrand
				propertyCategory
				propertyStatus
				propertyLocation
				propertyAddress
				propertyModel
				propertyPrice
				propertySize
				propertyColor
				propertyConnectivity
				propertyViews
				propertyLikes
				propertyImages
				propertyDesc
				propertyBarter
				propertyRent
				memberId
				soldAt
				deletedAt
				manufacturedAt
				createdAt
				updatedAt
				memberData {
					_id
					memberType
					memberStatus
					memberAuthType
					memberPhone
					memberNick
					memberFullName
					memberImage
					memberAddress
					memberDesc
					memberWarnings
					memberBlocks
					memberProperties
					memberRank
					memberPoints
					memberLikes
					memberViews
					deletedAt
					createdAt
					updatedAt
					accessToken
				}
			}
			metaCounter {
				total
			}
		}
	}
`;

/**************************
 *      BOARD-ARTICLE     *
 *************************/

export const GET_ALL_BOARD_ARTICLES_BY_ADMIN = gql`
	query GetAllBoardArticlesByAdmin($input: AllBoardArticlesInquiry!) {
		getAllBoardArticlesByAdmin(input: $input) {
			list {
				_id
				articleCategory
				articleStatus
				articleTitle
				articleContent
				articleImage
				articleViews
				articleLikes
				memberId
				createdAt
				updatedAt
				memberData {
					_id
					memberType
					memberStatus
					memberAuthType
					memberPhone
					memberNick
					memberFullName
					memberImage
					memberAddress
					memberDesc
					memberWarnings
					memberBlocks
					memberProperties
					memberRank
					memberPoints
					memberLikes
					memberViews
					deletedAt
					createdAt
					updatedAt
					accessToken
				}
			}
			metaCounter {
				total
			}
		}
	}
`;

/**************************
 *         COMMENT        *
 *************************/

export const GET_COMMENTS_BY_ADMIN = gql`
	query GetComments($input: CommentsInquiry!) {
		getComments(input: $input) {
			list {
				_id
				commentStatus
				commentGroup
				commentContent
				commentRefId
				memberId
				createdAt
				updatedAt
				memberData {
					_id
					memberType
					memberStatus
					memberAuthType
					memberPhone
					memberNick
					memberFullName
					memberImage
					memberAddress
					memberDesc
					memberWarnings
					memberBlocks
					memberProperties
					memberRank
					memberPoints
					memberLikes
					memberViews
					deletedAt
					createdAt
					updatedAt
					accessToken
				}
			}
			metaCounter {
				total
			}
		}
	}
`;

/**************************
 *      NOTIFICATION      *
 *************************/

export const GET_NOTIFICATION = gql`
	query GetNotifications($input: NotificationsInquiry!) {
		getNotifications(input: $input) {
			list {
				_id
				notificationType
				notificationStatus
				notificationGroup
				notificationTitle
				notificationDesc
				authorId
				receiverId
				propertyId
				articleId
				createdAt
				updatedAt
			}
			metaCounter {
				total
			}
		}
	}
`;

/**************************
 *         FAQ        *
 *************************/
export const GET_FAQS_BY_ADMIN = gql`
	query GetFaqs($input: FaqInquiry!) {
		getFaqs(input: $input) {
			list {
				_id
				faqQuestion
				faqAnswer
				faqType
				createdAt
				updatedAt
			}
			metaCounter {
				total
			}
		}
	}
`;
export const GET_FAQ_BY_ADMIN = gql`
	query GetFaq($input: String!) {
		getFaq(input: $input) {
			_id
			faqQuestion
			faqAnswer
			faqType
			memberData {
				_id
				memberType
				memberStatus
				memberAuthType
				memberPhone
				memberNick
				memberFullName
				memberImage
				memberAddress
				memberDesc
				memberProducts
				memberArticles
				memberFollowings
				memberPoints
				memberLikes
				memberViews
				memberComments
				memberRank
				memberWarnings
				memberBlocks
				createdAt
				updatedAt
				deletedAt
				accessToken
			}
			createdAt
			updatedAt
		}
	}
`;

/**************************
 *         NOTICE        *
 *************************/
export const GET_NOTICE_BY_ADMIN = gql`
	query GetNotice($input: String!) {
		getNotice(input: $input) {
			_id
			noticeType
			noticeContent
			noticeStatus
			createdAt
			updatedAt
			memberData {
				_id
				memberType
				memberStatus
				memberAuthType
				memberPhone
				memberNick
				memberFullName
				memberImage
				memberAddress
				memberDesc
				memberProducts
				memberArticles
				memberFollowings
				memberPoints
				memberLikes
				memberViews
				memberComments
				memberRank
				memberWarnings
				memberBlocks
				createdAt
				updatedAt
				deletedAt
				accessToken
			}
		}
	}
`;
export const GET_NOTICES_BY_ADMIN = gql`
	query GetNotices($input: NoticeInquiry!) {
		getNotices(input: $input) {
			list {
				_id
				noticeType
				noticeContent
				noticeStatus
				createdAt
				updatedAt
				memberData {
					_id
					memberType
					memberStatus
					memberAuthType
					memberPhone
					memberNick
					memberFullName
					memberImage
					memberAddress
					memberDesc
					memberProducts
					memberArticles
					memberFollowings
					memberPoints
					memberLikes
					memberViews
					memberComments
					memberRank
					memberWarnings
					memberBlocks
					createdAt
					updatedAt
					deletedAt
					accessToken
				}
			}
			metaCounter {
				total
			}
		}
	}
`;
