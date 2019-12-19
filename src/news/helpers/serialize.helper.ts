/* eslint-disable @typescript-eslint/camelcase */
import { NewYorkTimeNew } from '../interfaces/NewYorkTime.interface';
import { GuardianNew } from '../interfaces/TheGuardian.interface';
import { New } from '../interfaces/New.interface';
import { getNewYorkAuthor } from './regex.helper';
import { getGuardianContributors } from './formater.helper';

export function SerializeNewYorkNew(newYorkNew: NewYorkTimeNew): New {
  const {
    web_url,
    headline: { main },
    pub_date,
    byline: { original },
  } = newYorkNew;

  return {
    url: web_url,
    publishedAt: pub_date,
    source: 'New York Time',
    title: main,
    author: getNewYorkAuthor(original),
  };
}

export function SerializeGuardianNew(guardianNew: GuardianNew): New {
  const { webTitle, webUrl, webPublicationDate, tags } = guardianNew;

  return {
    url: webUrl,
    publishedAt: webPublicationDate,
    source: 'The Guardian',
    title: webTitle,
    author: getGuardianContributors(tags),
  };
}
