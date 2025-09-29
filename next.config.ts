import type { NextConfig} from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const NextConfig: NextConfig = {}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(NextConfig)